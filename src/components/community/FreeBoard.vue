<template>
  <div>
    <div class="title">자유게시판</div>
    <contents
      :posts="posts"
      :maxPage="maxPage"
      @getPosts="getPosts"/>
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
    this.$on('getPosts', this.getPosts)
    this.getPosts(1)
  },
  data () {
    return {
      posts: [],
      maxPage: 0
    }
  },
  methods: {
    getPosts (page) {
      this.$http.get('/board/post', {
        params: {
          page: page
        }
      }).then(res => {
        const data = res.data
        this.posts = data.data
        this.maxPage = data.max_page
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
