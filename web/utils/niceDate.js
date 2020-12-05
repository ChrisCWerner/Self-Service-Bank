export const niceDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleString('pt-BR')
}
