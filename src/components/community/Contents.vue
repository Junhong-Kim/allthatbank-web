<template>
  <div class="post-container">
    <table class="table table-hover custom-table">
      <thead>
        <tr>
          <th style="width: 60px;">번호</th>
          <th>제목</th>
          <th style="width: 100px;">작성일</th>
          <th style="width: 100px;">작성자</th>
          <th style="width: 60px;">조회수</th>
          <th style="width: 60px;">좋아요</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index" @click="detail(post.id)" style="cursor: pointer">
          <td>{{post.id}}</td>
          <td class="post-title">
            {{post.title}}
            <span v-if="post.comment_count > 0">[{{post.comment_count}}]</span>
          </td>
          <td>{{post.created_at}}</td>
          <td>{{post.user.nickname}}</td>
          <td>{{post.views}}</td>
          <td>{{post.like}}</td>
        </tr>
      </tbody>
    </table>
    <div class="custom-pagination">
      <ul>
        <li @click="prevPage(startPage)">이전</li>
        <li v-for="(page, index) in pages" :key="index" @click="getPosts(page)"
            :class="[page == nowPage ? 'selectPage' : '']">
          {{page}}
        </li>
        <li @click="nextPage(startPage)">다음</li>
      </ul>
    </div>
    <div class="write-post">
      <button type="button" @click="writePost">글쓰기</button>
    </div>
  </div>
</template>

<script>
import {getCookie} from '@/utils/common'

export default {
  name: 'CommunityContents',
  data () {
    return {
      nowPage: 1,
      startPage: 1,
      offset: 5
    }
  },
  props: {
    posts: {
      type: Array
    },
    maxPage: {
      type: Number
    }
  },
  computed: {
    pages () {
      let arr = []
      let endPage = this.startPage + (this.offset - 1)
      if (endPage >= this.maxPage) {
        endPage = this.maxPage
      }

      for (let i = this.startPage; i <= endPage; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    writePost () {
      const token = getCookie('x-access-token')
      if (token == null) {
        alert('로그인이 필요합니다.')
      } else {
        this.$router.push({'name': 'Editor'})
      }
    },
    detail (postId) {
      this.$router.push({'name': 'FreeBoardDetail', params: { id: postId }})
    },
    getPosts (page) {
      this.nowPage = page
      this.$emit('getPosts', page)
    },
    prevPage (startPage) {
      if (startPage - 1 === 0) {
        alert('이전 페이지가 없습니다.')
      } else {
        this.startPage = startPage - this.offset
        this.getPosts(this.startPage)
      }
    },
    nextPage (startPage) {
      if (startPage + this.offset > this.maxPage) {
        alert('다음 페이지가 없습니다.')
      } else {
        this.startPage = startPage + this.offset
        this.getPosts(this.startPage)
      }
    }
  }
}
</script>

<style scoped>
.post-container {
  background: white;
  padding-top: 20px;
}
.post-title {
  text-align: left;
}
.post-title > span {
  color: #42b883;
  font-weight: bold;
}
.custom-table {
  font-size: 12px;
  margin: auto;
  text-align: center;
  width: 1000px;
}
.custom-pagination > ul {
  font-size: 0;
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
}
.custom-pagination > ul > li {
  border: 1px solid #DEE2E6;
  cursor: pointer;
  display: inline;
  font-size: 10px;
  margin: 1px;
  padding: 5px 10px;
}
.custom-pagination > ul > li:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.custom-pagination > ul > li:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.custom-pagination > ul > li:hover {
  background: #35495e;
  border: 1px solid #dee2e6;
  color: white;
}
.write-post {
  margin: auto;
  text-align: center;
  width: 1000px;
}
.write-post > button {
  background: #42b883;
  border: 1px solid #42b883;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
}
.write-post > button:focus {
  outline: 0;
}
.write-post > button:hover {
  cursor: pointer;
}
tbody > tr > td {
  vertical-align: middle;
}
.selectPage {
  background: #42b883;
  border: 1px solid #dee2e6;
  color: white;
  cursor: pointer;
  display: inline;
  font-size: 10px;
  margin: 1px;
  padding: 5px 10px;
}
</style>
