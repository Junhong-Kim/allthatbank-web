import Constant from '../constant'

export default {
  [Constant.SET_BANK_LIST]: (state, payload) => {
    state.bankList = payload.bankList
    state.bankList.forEach(bank => {
      switch (bank.fin_co_no) {
        case '0010001':
          bank.kor_co_nm = '우리은행'
          break
        case '0010002':
          bank.kor_co_nm = 'SC제일은행'
          break
        case '0010006':
          bank.kor_co_nm = '씨티은행'
          break
        case '0010016':
          bank.kor_co_nm = '대구은행'
          break
        case '0010017':
          bank.kor_co_nm = '부산은행'
          break
        case '0010019':
          bank.kor_co_nm = '광주은행'
          break
        case '0010020':
          bank.kor_co_nm = '제주은행'
          break
        case '0010022':
          bank.kor_co_nm = '전북은행'
          break
        case '0010024':
          bank.kor_co_nm = '경남은행'
          break
        case '0010026':
          bank.kor_co_nm = 'IBK기업은행'
          break
        case '0010030':
          bank.kor_co_nm = 'KDB산업은행'
          break
        case '0010927':
          bank.kor_co_nm = '국민은행'
          break
        case '0011625':
          bank.kor_co_nm = '신한은행'
          break
        case '0013175':
          bank.kor_co_nm = '농협은행'
          break
        case '0013909':
          bank.kor_co_nm = 'KEB하나은행'
          break
        case '0014674':
          bank.kor_co_nm = '케이뱅크'
          break
        case '0014807':
          bank.kor_co_nm = '수협은행'
          break
        case '0015130':
          bank.kor_co_nm = '카카오뱅크'
          break
        default:
          bank.kor_co_nm = '신규은행'
      }
      bank.logo = 'logo.png'
    })
  },
  [Constant.SET_SAVING_PRODUCT_LIST]: (state, payload) => {
    state.productList = payload.productList
  }
}
