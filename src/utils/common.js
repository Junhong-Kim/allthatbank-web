export function setComma (number) {
  let str = String(number)
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}

export function isValidEmail (email) {
  let re = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
  return re.test(email)
}

export function setCookie (name, value, exp) {
  let date = new Date()
  date.setTime(date.getTime() + exp * 60 * 60 * 1000)
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/'
}

export function getCookie (name) {
  let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return value ? value[2] : null
}

export function deleteCookie (name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
