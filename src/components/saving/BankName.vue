<template>
  <div>
    <div class="title">은행별<span class="emphasis">적금상품</span>을 검색해보세요!</div>
    <bank-grid/>
    <contents/>
  </div>
</template>

<script>
import BankGrid from '@/components/common/BankGrid'
import Contents from '@/components/saving/Contents'

export default {
  components: {
    BankGrid,
    Contents
  }
}
</script>

<style scoped>
.title {
  color: white;
  font-size: 25px;
  margin: 20px;
  text-align: center;
}
.emphasis {
  color: #35495e;
  font-size: 30px;
  font-weight: bold;
}
</style>
