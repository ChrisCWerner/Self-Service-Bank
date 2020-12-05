export const niceValue = ({ value, currency, balance }) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value || balance)
}
