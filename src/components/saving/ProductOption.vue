<template>
  <div>
    <div class="filter-box">
      <div class="vertical-center">
        <option-box/>
      </div>
    </div>
    <contents/>
  </div>
</template>

<script>
import Contents from '@/components/saving/Contents'
import OptionBox from '@/components/common/OptionBox'

export default {
  components: {
    Contents,
    OptionBox
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
