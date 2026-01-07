// "2025-06" -> "Jun 2025" in every locale (Intl alone gives "jun. de 2025" in pt-BR).
export function formatMonthYear(yearMonth: string, locale: string) {
  const [year, month] = yearMonth.split("-").map(Number);
  const monthLabel = new Date(Date.UTC(year, month - 1, 15))
    .toLocaleDateString(locale, { month: "short", timeZone: "UTC" })
    .replace(".", "");

  return `${monthLabel.charAt(0).toLocaleUpperCase(locale)}${monthLabel.slice(1)} ${year}`;
}
