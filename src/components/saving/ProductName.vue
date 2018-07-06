<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <div class="title">찾으시는 <span class="emphasis">적금상품</span>이 있으신가요?</div>
        <search-box :search="search"/>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import SearchBox from '@/components/common/SearchBox'
import Contents from '@/components/saving/Contents'
import Constant from '../../constant'

export default {
  components: {
    SearchBox,
    Contents
  },
  data () {
    return {
      product: []
    }
  },
  methods: {
    search (keyword) {
      if (keyword === '') {
        alert('상품 이름을 입력해주세요.')
      } else {
        this.$http.get('/saving_products/search', {
          params: {
            fin_prdt_nm: keyword
          }
        }).then(res => {
          const data = res.data.data
          let payload = {
            productList: data
          }
          this.$store.commit(Constant.SET_SAVING_PRODUCT_LIST, payload)
          console.log(res)
        })
      }
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
