export function setComma (number) {
  let str = String(number)
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}
