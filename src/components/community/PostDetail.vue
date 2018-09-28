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
      <div class="like-post">
        <span>{{this.post.like}}</span>
        <img src="../../assets/logo.png" @click="likePost">
      </div>
    </div>
    <div class="write-comment">
      <input type="text" placeholder="댓글을 입력해주세요." v-model="comment">
      <button type="button" @click=save>등록</button>
    </div>
    <ul class="comment" v-if="this.comments.length > 0">
      <li v-for="(comment, index) in comments" :key=index>
        <img :src="comment.user.picture_url">
        <div>
          <span><strong>{{comment.user.nickname}}</strong></span>
          <span style="color: gray;">{{comment.created_at}}</span>
          <div class="like-comment">
            <span>{{comment.like}}</span>
            <img src="../../assets/logo.png" @click="likeComment(comment.id)">
          </div>
        </div>
        <div>{{comment.contents}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  created () {
    this.getPost()
    this.getComments()
  },
  data () {
    return {
      userId: this.$store.state.user.id,
      postId: this.$route.params.id,
      post: null,
      comment: '',
      comments: []
    }
  },
  methods: {
    getPost () {
      this.$http.get('/board/post/' + this.postId).then(res => {
        const data = res.data.data
        this.post = data
      })
    },
    getComments () {
      this.$http.get('/board/post/' + this.postId + '/comment').then(res => {
        const data = res.data.data
        this.comments = data
      })
    },
    save () {
      this.$http.post('/board/post/' + this.postId + '/comment', {
        contents: this.comment,
        user: this.userId
      }).then(res => {
        this.comment = ''
      }).catch(err => {
        if (this.comment === '') {
          alert('댓글을 입력해주세요.')
        } else {
          alert('로그인이 필요합니다.')
        }
        console.log(err)
      })
    },
    likePost () {
      this.$http.post('/board/post/' + this.postId + '/like?user_id=' + this.userId
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    likeComment (commentId) {
      this.$http.post('/board/comment/' + commentId + '/like?user_id=' + this.userId
      ).then(res => {
        console.log(res)
      }).catch(err => {
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
.write-comment {
  border: 1px solid black;
  margin-top: 10px;
  padding: 5px;
}
.write-comment > input {
  float: left;
  padding-left: 5px;
  width: 95%;
}
.write-comment > input:focus {
  outline: none;
}
.write-comment > button {
  background: #42b883;
  border: 1px solid #42b883;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  width: 5%;
}
.write-comment > button:focus {
  outline: none;
}
.write-comment > button:hover {
  cursor: pointer;
}
.profile {
  margin-top: 5px;
  margin-bottom: 20px;
}
.profile > img {
  border-radius: 50%;
  width: 32px;
}
.comment {
  border: 1px solid black;
  list-style-type: none;
  margin-top: 10px;
  padding: 0;
}
.comment > li {
  padding: 10px 0;
}
.comment > li:hover {
  background: #ECECEC;
}
.comment > li > img {
  border-radius: 50%;
  float: left;
  margin: 10px;
  margin-right: 15px;
  width: 32px;
}
.like-post {
  text-align: center;
}
.like-post > img {
  cursor: pointer;
  width: 20px;
}
.like-comment {
  float: right;
  margin: 10px;
}
.like-comment > img {
  cursor: pointer;
  width: 20px;
}
</style>
