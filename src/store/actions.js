import Constant from '../constant'
import axios from 'axios'
import qs from 'qs'

export default {
  [Constant.SET_BANK_LIST]: (store, payload) => {
    axios.get('/fss/companies', {
      params: {
        topFinGrpNo: '020000',
        page: 1
      }
    }).then(res => {
      const data = res.data.data
      payload = {
        bankList: data
      }
      store.commit(Constant.SET_BANK_LIST, payload)
    })
  },
  [Constant.SET_SAVING_PRODUCT_LIST]: (store, payload) => {
    axios.get('/saving_products', {
      params: {
        fin_co_no: payload.fin_co_nos,
        limit: 1000
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
      }
    }).then(res => {
      const data = res.data.data
      payload = {
        productList: data
      }
      store.commit(Constant.SET_SAVING_PRODUCT_LIST, payload)
    })
  }
}
