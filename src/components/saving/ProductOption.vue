<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <option-box :search="search"/>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import Contents from '@/components/saving/Contents'
import OptionBox from '@/components/common/OptionBox'
import Constant from '../../constant'
import qs from 'qs'

export default {
  components: {
    Contents,
    OptionBox
  },
  methods: {
    search (params) {
      this.$http.get('/saving_products/search', {
        params,
        paramsSerializer: params => qs.stringify(params, {
          arrayFormat: 'repeat'
        })
      }).then(res => {
        const data = res.data.data
        console.log(data)
        let payload = {
          productList: data
        }
        this.$store.commit(Constant.SET_SAVING_PRODUCT_LIST, payload)
      })
    }
  }
}
</script>

<style scoped>
.vertical-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
