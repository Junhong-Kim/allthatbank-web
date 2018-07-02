import Constant from '../constant'

export default {
  [Constant.SET_BANK_LIST]: (state, payload) => {
    state.bankList = payload.bankList
    state.bankList.forEach(bank => {
      bank.logo = 'logo.png'
    })
  }
}
