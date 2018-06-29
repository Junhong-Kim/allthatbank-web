<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <div class="title">찾으시는 <span class="emphasis">적금상품</span>이 있으신가요?</div>
        <search-box/>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import SearchBox from '@/components/common/SearchBox'
import Contents from '@/components/saving/Contents'

export default {
  components: {
    SearchBox,
    Contents
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
