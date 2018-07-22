import Constant from '../constant'
import axios from 'axios'
import qs from 'qs'

export default {
  [Constant.SET_BANK_LIST]: (store, payload) => {
    axios.get('/fss/companies', {
      params: {
        top_fin_grp_No: '020000',
        page_no: 1
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
    axios.get('/fss/saving_products', {
      params: {
        fin_co_no: payload.fin_co_nos
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
