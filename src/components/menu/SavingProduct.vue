<template>
  <div class="custom-container">
    <sub-menu :subMenus="subMenus"/>
    <router-view/>
  </div>
</template>

<script>
import SubMenu from '@/components/common/SubMenu'

export default {
  components: {
    SubMenu
  },
  data () {
    return {
      subMenus: [
        {
          name: '은행검색',
          route: '/saving/bankName'
        },
        {
          name: '적금상품',
          route: '/saving/productName'
        },
        {
          name: '적금옵션',
          route: '/saving/productOption'
        }
      ]
    }
  }
}
</script>

<style>
.filter-box {
  height: 300px;
}
.filter-box .title {
  color: white;
  font-size: 25px;
  margin: 10px auto;
  text-align: center;
  width: 1000px;
}
.filter-box .emphasis {
  color: #35495e;
  font-size: 30px;
  font-weight: bold;
}
</style>
