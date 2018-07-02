import Constant from '../constant'
import axios from 'axios'

export default {
  [Constant.SET_BANK_LIST]: (store, payload) => {
    axios.get('/company', {
      params: {
        top_fin_grp_no: '020000',
        offset: 1,
        limit: 20
      }
    }).then(res => {
      const data = res.data.data
      payload = {
        bankList: data
      }
      store.commit(Constant.SET_BANK_LIST, payload)
    })
  }
}
