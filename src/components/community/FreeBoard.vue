<template>
  <div>
    <div class="title">자유게시판</div>
    <contents :posts="this.posts"/>
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
      const data = res.data.data
      this.posts = data.reverse()
    }).catch(err => {
      console.log(err)
    })
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style scoped>

</style>
