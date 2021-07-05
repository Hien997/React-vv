export const formatCurrency = (amt: string | number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const supplyPrice = formatter.format(Number(amt));

  return supplyPrice;
};
