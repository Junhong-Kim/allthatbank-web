<template>
  <div class="product-container">
    <product-sorting/>
    <product-thumbnail v-for="(item, index) in items" :key="index" :product="item"/>
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
  data () {
    return {
      items: [1, 2, 3, 4]
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
