export function formatCurrency(price: number) {
  const formatedPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price);
  return formatedPrice;
}

