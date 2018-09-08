<template>
  <div style="background: white; padding: 10px 200px;">
    <div style="border: 1px solid black; padding: 5px;" v-if="this.post">
      <div class="post-title">
        <span>{{this.post.title}}</span>
        <span class="datetime">{{this.post.created_at}}</span>
      </div>
      <div class="profile">
        <img :src="this.post.user.picture_url">
        <span>{{this.post.user.nickname}}</span>
      </div>
      <span v-html="this.post.contents"></span>
    </div>
    <div style="border: 1px solid black; margin-top: 10px; padding: 5px;">
      <input type="text" placeholder="댓글을 입력해주세요." v-model="comment">
      <button type="button" @click=save>등록</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  created () {
    this.$http.get('/board/post/' + this.id).then(res => {
      const data = res.data.data
      this.post = data
    })
  },
  data () {
    return {
      id: this.$route.params.id,
      post: null,
      comment: ''
    }
  },
  methods: {
    save () {
      this.$http.post('/board/post/' + this.id + '/comment', {
        contents: this.comment,
        user: this.$store.state.user.id
      }).then(res => {
        this.comment = ''
      }).catch(err => {
        alert('로그인이 필요합니다.')
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.post-title {
  border-bottom: 1px dotted black;
  padding-bottom: 5px;
}
.post-title > .datetime {
  color: gray;
  float: right;
}
.profile {
  margin-top: 5px;
  margin-bottom: 20px;
}
.profile > img {
  border-radius: 50%;
  width: 32px;
}
</style>
