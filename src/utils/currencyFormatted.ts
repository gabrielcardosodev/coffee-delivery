export function currencyFormatted(value: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return formatter.format(value)
}
