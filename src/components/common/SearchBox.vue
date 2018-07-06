<template>
  <div class="search-box">
    <img class="search-icon" src="../../assets/logo.png">
    <input class="search-text" type="text" placeholder="상품 이름을 입력해주세요." style="width: 90%;"
           v-model="keyword"
           @keypress.enter=search(keyword)>
    <i class="material-icons clear-icon" v-show="keyword.length > 0" @click="clear">cancel</i>
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
    clear () {
      this.keyword = ''
    }
  },
  props: [
    'search'
  ]
}
</script>

<style scoped>
.search-box {
  background: white;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding: 10px 20px;
  position: relative;
  width: 600px;
}
.search-icon {
  width: 30px;
}
.clear-icon {
  position: absolute;
  right: 20px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}
.search-text {
  border: none;
  margin-left: 10px;
  font-size: 18px;
}
.search-text:focus {
  outline: none;
}
.material-icons {
  color: #EAEAEA;
}
</style>
