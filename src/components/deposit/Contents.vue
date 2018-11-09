<template>
  <div class="product-container">
    <product-sorting :products="products"/>
    <deposit-product-thumbnail v-if="products.length !== 0" v-for="(product, index) in products" :key="index" :product="product"/>
  </div>
</template>

<script>
import ProductSorting from '@/components/common/ProductSorting'
import DepositProductThumbnail from '@/components/common/DepositProductThumbnail'

export default {
  name: 'Contents',
  components: {
    ProductSorting,
    DepositProductThumbnail
  },
  computed: {
    selectBanks () {
      return this.$store.state.selectBanks
    },
    products () {
      return this.$store.state.depositProductList
    }
  }
}
</script>

<style scoped>
.product-container {
  background: #F9F9F9;
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
