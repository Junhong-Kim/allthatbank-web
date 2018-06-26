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
          route: '/deposit/bankName'
        },
        {
          name: '예금상품',
          route: '/deposit/productName'
        },
        {
          name: '예금옵션',
          route: '/deposit/productOption'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
