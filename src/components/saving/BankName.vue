<template>
  <div>
    <div class="filter-box">
      <div class="title">은행별 <span class="emphasis">적금상품</span>을 모아보세요!</div>
      <bank-grid/>
    </div>
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

</style>
