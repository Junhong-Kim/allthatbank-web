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
        <tr v-for="(item,index) in 10" :key="index" style="cursor: pointer">
          <td>{{index}}</td>
          <td style="text-align: left;">테스트</td>
          <td>2018.01.01</td>
          <td>테스트</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    <div class="custom-pagination">
      <ul>
        <li>이전</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>다음</li>
      </ul>
    </div>
    <div class="writing">
      <button type="button" @click="writing">글쓰기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityContents',
  methods: {
    writing () {
      this.$router.push({'name': 'Editor'})
    }
  }
}
</script>

<style scoped>
.post-container {
  background: white;
  padding-top: 20px;
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
  border: 1px solid #35495e;
  color: white;
}
.writing {
  margin: auto;
  text-align: center;
  width: 1000px;
}
.writing > button {
  background: #42b883;
  border: 1px solid #42b883;
  color: white;
  font-size: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
}
.writing > button:focus {
  outline: 0;
}
.writing > button:hover {
  cursor: pointer;
}
</style>
