export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "USD",
    minFraction: 2,
  };

  if (amount % 100 === 0) options.minFraction = 0;

  const formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}
