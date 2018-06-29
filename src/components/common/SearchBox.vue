<template>
  <div class="search-box">
    <img class="search-icon" src="../../assets/logo.png">
    <input class="search-text" type="text" placeholder="상품 이름을 입력해주세요." style="width: 90%;"
           v-model="keyword"
           @keyup.enter=search(keyword)>
    <img class="clear-icon" src="../../assets/logo.png" style="cursor: pointer;"
         v-show="keyword.length > 0"
         @click="clear">
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search (keyword) {
      console.log(keyword)
    },
    clear () {
      this.keyword = ''
    }
  }
}
</script>

<style scoped>
.search-box {
  background: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding: 15px 20px;
  position: relative;
  width: 600px;
}
.search-icon {
  width: 30px;
}
.clear-icon {
  width: 30px;
  position: absolute;
  right: 20px;
}
.search-text {
  border: none;
  margin-left: 10px;
  font-size: 18px;
}
.search-text:focus {
  outline: none;
}
</style>
