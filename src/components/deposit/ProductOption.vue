<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <production-option-box :search="search"></production-option-box>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import Contents from '@/components/deposit/Contents'
import ProductionOptionBox from '@/components/deposit/ProductOptionBox'
import Constant from '../../constant'
// import qs from 'qs'

export default {
  components: {
    Contents,
    ProductionOptionBox
  },
  methods: {
    search (params) {
      this.$http.get('/fss/deposit_products/search/option', {
        params
        // paramsSerializer: params => qs.stringify(params, {
        //   arrayFormat: 'repeat'
        // })
      }).then(res => {
        const data = res.data.data
        let payload = {
          productList: data
        }
        this.$store.commit(Constant.SET_DEPOSIT_PRODUCT_LIST, payload)
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
