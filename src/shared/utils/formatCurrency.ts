/**
 * Formats a number as a localised currency string.
 * @example formatCurrency(5.5) => "€5.50"
 */
export function formatCurrency(
  amount: number,
  currency = 'EUR',
  locale = 'en-IE',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
