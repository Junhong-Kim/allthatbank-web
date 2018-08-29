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
          name: '공지사항',
          route: '/community/notice'
        },
        {
          name: '자유게시판',
          route: '/community/freeBoard'
        },
        {
          name: 'Q&A',
          route: '/community/question'
        }
      ]
    }
  }
}
</script>

<style>
.title {
  color: white;
  font-size: 25px;
  margin: 20px auto;
  text-align: center;
  width: 600px;
}
</style>
