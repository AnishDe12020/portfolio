export const readMinutes = (text: string) =>
  Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 220));

export const fmtDate = (date: Date) =>
  date
    .toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
    .toLowerCase()
    .replace(' ', " '")
    .replace("'20", "'");
