<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <div class="title">은행별 <span class="emphasis">예금상품</span>을 모아보세요!</div>
        <bank-grid/>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import BankGrid from '@/components/common/BankGrid'
import Contents from '@/components/deposit/Contents'

export default {
  components: {
    BankGrid,
    Contents
  }
}
</script>

<style scoped>
.vertical-center {
  position: relative;
  top: 5%;
}
</style>
