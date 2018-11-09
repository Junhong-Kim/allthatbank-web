<template>
  <div class="product-sorting">
    <div style="float: left; line-height: 40px">검색결과
      <span v-if="products.length > 0" class="emphasis">{{products.length}}</span>
      <span v-else class="emphasis">0</span>개
    </div>
    <div class="dropdown" style="position: absolute; right: 0;">
      <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        상품 정렬
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div class="dropdown-item" @click="basicRate">기본금리순</div>
        <div class="dropdown-item" @click="primeRate">우대금리순</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSorting',
  computed: {
    selectBanks () {
      return this.$store.state.selectBanks
    }
  },
  methods: {
    basicRate () {
      const key = 'basic_rate_max'
      this.sortByKey(key)
    },
    primeRate () {
      const key = 'prime_rate_max'
      this.sortByKey(key)
    },
    sortByKey (key) {
      let path = this.$router.currentRoute.path.split('/')[1]
      const productList = (path === 'saving')
        ? this.$store.state.productList
        : this.$store.state.depositProductList
      productList.sort(function (a, b) {
        let keyA = a[key]
        let keyB = b[key]

        // keyA가 keyB보다 작을 때
        if (keyA < keyB) {
          return -1
        }
        // keyA가 keyB보다 클 때
        if (keyA > keyB) {
          return 1
        }
        // keyA와 keyB가 동일할 때
        return 0
      }).reverse()
    }
  },
  props: [
    'products'
  ]
}
</script>

<style scoped>
.product-sorting {
  width: 1000px;
  height: 40px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.emphasis {
  color: #42b883;
  font-weight: bold;
}
#dropdownMenuButton {
  background-color: #42b883;
}
</style>
