const EXCERPT_LENGTH = 180;

/**
 * Plain-text preview of a Markdoc/Markdown post body: strips syntax markup
 * and cuts to the nearest word boundary within EXCERPT_LENGTH chars.
 */
export function postExcerpt(body?: string): string {
  if (!body) return '';

  const plain = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\{%[\s\S]*?%\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= EXCERPT_LENGTH) return plain;

  const cut = plain.slice(0, EXCERPT_LENGTH);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : EXCERPT_LENGTH)}…`;
}
