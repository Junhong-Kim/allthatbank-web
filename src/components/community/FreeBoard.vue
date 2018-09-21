<template>
  <div>
    <div class="title">자유게시판</div>
    <contents
      :posts="this.posts"
      :maxPage="this.maxPage"/>
  </div>
</template>

<script>
import Contents from '@/components/community/Contents'

export default {
  name: 'FreeBoard',
  components: {
    Contents
  },
  created () {
    this.$http.get('/board/post', {
      params: {
        page: 1
      }
    }).then(res => {
      const data = res.data
      this.posts = data.data
      this.maxPage = data.max_page
    }).catch(err => {
      console.log(err)
    })
  },
  data () {
    return {
      posts: [],
      maxPage: 0
    }
  }
}
</script>

<style scoped>

</style>
