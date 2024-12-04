const usdCurrency = Intl.NumberFormat('en', {
   style: 'currency',
   currency: 'USD',
   maximumFractionDigits: 2,
});

export function formatInUSD(amount: number) {
   return usdCurrency.format(amount);
}
