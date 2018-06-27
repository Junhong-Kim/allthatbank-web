<template>
  <div class="product-container">
    <product-thumbnail v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
import ProductThumbnail from '@/components/common/ProductThumbnail'

export default {
  name: 'Contents',
  components: {
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
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
