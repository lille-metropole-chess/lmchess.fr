type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

type SendResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Votre message n'a pas pu être envoyé.";

/**
 * Send a contact-form message through Resend.
 *
 * Never throws: the caller re-renders the form with the visitor's text, so a
 * failure here must come back as a value, not blow up the page render.
 */
export async function sendContactMessage({
  name,
  email,
  message,
}: ContactMessage): Promise<SendResult> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_EMAIL_TO is missing');
    return { ok: false, error: GENERIC_ERROR };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site LMC <contact@lmchess.fr>',
        to: Array.isArray(to) ? to : [to],
        reply_to: email,
        subject: `Nouveau message de ${name}`,
        text: `${message}\n\n${name} (${email})`,
      }),
    });

    if (!res.ok) {
      console.error('Resend API error:', res.status, await res.text());
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (cause) {
    // Network failure, DNS, timeout: the visitor's text still has to survive.
    console.error('Contact form: request to Resend failed', cause);
    return { ok: false, error: GENERIC_ERROR };
  }
}
