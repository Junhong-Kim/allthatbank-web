<template>
  <div class="product-container">
    <product-sorting :products="products"/>
    <product-thumbnail v-if="selectBanks.length > 0" v-for="(product, index) in products" :key="index" :product="product"/>
  </div>
</template>

<script>
import ProductSorting from '@/components/common/ProductSorting'
import ProductThumbnail from '@/components/common/ProductThumbnail'

export default {
  name: 'Contents',
  components: {
    ProductSorting,
    ProductThumbnail
  },
  computed: {
    selectBanks () {
      return this.$store.state.selectBanks
    },
    products () {
      return this.$store.state.productList
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
