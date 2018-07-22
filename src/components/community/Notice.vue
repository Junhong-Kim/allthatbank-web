<template>
  <div>공지사항</div>
</template>

<script>
export default {
  name: 'Notice',
  created () {
    alert('서비스 준비중입니다.')
    this.$router.go(-1)
  }
}
</script>

<style scoped>

</style>
