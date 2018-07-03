<template>
  <div class="product-sorting">
    <div style="float: left; line-height: 40px">검색결과
      <span v-if="selectBanks.length > 0" class="emphasis">{{products.length}}</span>
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
      console.log('기본금리')
    },
    primeRate () {
      console.log('우대금리')
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
