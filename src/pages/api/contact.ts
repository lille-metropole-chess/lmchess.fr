import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const name = formData.get('name')?.toString().trim();
	const email = formData.get('email')?.toString().trim();
	const message = formData.get('message')?.toString().trim();

	if (!name || !email || !message) {
		return redirect('/contact?sent=error');
	}

	const apiKey = import.meta.env.RESEND_API_KEY;
	const to = import.meta.env.CONTACT_EMAIL_TO;

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: 'Site LMC <contact@lmchess.fr>',
			to: Array.isArray(to) ? to : [to], // Resend prefers array of email strings
			reply_to: email,
			subject: `Nouveau message de ${name}`,
			text: `${message}\n\n— ${name} (${email})`,
		}),
	});

	if (!res.ok) {
		console.error('Resend API error:', res.status, await res.text());
		return redirect('/contact?sent=error');
	}

	return redirect('/contact?sent=ok');
};
