const FRENCH_MONTHS: Record<string, number> = {
  janvier: 0,
  février: 1,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
  decembre: 11,
};

/**
 * Sortable timestamp for a free-text French tournament date, e.g.
 * "19-23 Octobre 2026" or "9-10 Janvier 2027" (uses the first day of a
 * range). Missing or unparseable dates sort last.
 */
export function tournamentDateValue(date?: string): number {
  if (!date) return Infinity;
  const match = date.match(/(\d+)(?:-\d+)?\s+(\p{L}+)\s+(\d{4})/u);
  if (!match) return Infinity;
  const [, day, monthName, year] = match;
  const month = FRENCH_MONTHS[monthName.toLowerCase()];
  if (month === undefined) return Infinity;
  return new Date(Number(year), month, Number(day)).getTime();
}
