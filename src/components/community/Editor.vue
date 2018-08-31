<template>
  <div>
    <div class="title">글쓰기</div>
    <div class="editor-container">
      <input type="text" placeholder="제목" v-model="title">
      <vue-editor v-model="content" style="width: 1000px; margin: auto;"></vue-editor>
      <div class="save">
        <button type="button" @click="saveContent">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'Editor',
  components: {
    VueEditor
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    saveContent () {
      if (confirm('현재 글을 작성합니다.')) {
        this.$router.replace({'name': 'FreeBoard'})
        console.log(this.content)
      }
    }
  }
}
</script>

<style scoped>
.editor-container {
  background: white;
  padding-top: 20px;
  text-align: center;
}
.editor-container > input{
  border: 2px solid #35495e;
  width: 1000px;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.save {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 1000px;
}
.save > button {
  background: #42b883;
  border: 1px solid #42b883;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
}
.save > button:focus {
  outline: 0;
}
.save > button:hover {
  cursor: pointer;
}
</style>
