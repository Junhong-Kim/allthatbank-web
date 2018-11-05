<template>
  <div>
    <form @click.prevent>
      <div class="form-group">
        <input type="text" class="form-control" id="nickname" placeholder="닉네임" v-model="nickname">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="username" placeholder="아이디(이메일)" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="비밀번호" v-model="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="passwordCheck" placeholder="비밀번호 확인" v-model="passwordCheck">
      </div>
      <button class="btn btn-success" style="width: 100%;" @click="signUp()">회원가입</button>
      <div style="text-align: center; margin: 10px 0;">
        <router-link :to="{name: 'FindPassword'}" tag="span" style="cursor: pointer;">비밀번호 찾기</router-link>
        <span> | </span>
        <router-link :to="{name: 'SignIn'}" tag="span" style="cursor: pointer;">로그인</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {isValidEmail} from '../../utils/common'

export default {
  data () {
    return {
      nickname: '',
      username: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    signUp () {
      if (this.nickname === '' || this.username === '' || this.password === '' || this.passwordCheck === '') {
        alert('입력되지 않은 항목이 있습니다')
      } else if (isValidEmail(this.username) === false) {
        alert('이메일 형식이 올바르지 않습니다')
      } else if (this.password !== this.passwordCheck) {
        alert('비밀번호가 일치하지 않습니다')
      } else {
        this.$http.post('/users/', {
          email: this.username,
          nickname: this.nickname,
          username: this.username,
          password: this.password
        }).then(res => {
          alert('회원가입이 완료되었습니다')
          this.$router.push({name: 'Login'})
        }).catch(err => {
          if (err.response.status === 409) {
            alert('이미 존재하는 이메일입니다')
          } else {
            alert('알 수 없는 에러가 발생했습니다')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
span {
  color: #777777;
  font-size: 8px;
}
</style>
