export function setComma (number) {
  let str = String(number)
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}

export function isValidEmail (email) {
  let re = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
  return re.test(email)
}
