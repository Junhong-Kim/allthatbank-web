<template>
  <div>
    <div class="btn-fb" @click="fbLogin()">
      <img class="img" :src="fbImg">
      <div class="text">Facebook으로 로그인하기</div>
    </div>
    <div style="text-align: center; margin: 20px 0;">또는</div>
    <form @click.prevent>
      <div class="form-group">
        <input type="email" class="form-control" id="username" placeholder="아이디(이메일)" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="비밀번호" v-model="password">
      </div>
      <button class="btn btn-success" style="width: 100%;" @click='signIn()'>로그인</button>
      <div style="text-align: center; margin: 10px 0;">
        <router-link :to="{name: 'FindPassword'}" tag="span" style="cursor: pointer;">비밀번호 찾기</router-link>
        <span> | </span>
        <router-link :to="{name: 'SignUp'}" tag="span" style="cursor: pointer;">회원가입</router-link>
       </div>
    </form>
  </div>
</template>

<script>
import {decodeJwt, setCookie} from '../../utils/common'
import Constant from '../../constant'

/* eslint-disable */
export default {
  data () {
    return {
      fbImg: require('../../assets/facebook.png'),
      username: '',
      password: ''
    }
  },
  methods: {
    fbLogin () {
      const self = this
      FB.login(res => {
        self.statusChangeCallback(res)
      }, {
        scope: 'public_profile, email'
      })
    },
    statusChangeCallback (res) {
      const status = res.status
      if (status === 'connected') {
        const fbAccessToken = res.authResponse.accessToken
        this.debugToken(fbAccessToken)
      } else {
        console.log('Login fail')
      }
    },
    debugToken (fbAccessToken) {
      const self = this
      this.$http.post('/users/debug_token/fb', {
        token: fbAccessToken
      }).then(res => {
        const data = res.data.data
        if (data === null) {
          this.createUser(fbAccessToken)
        } else {
          const payload = {
            'id': data.id,
            'username': data.username,
            'nickname': data.nickname,
            'picture_url': data.picture_url
          }
          self.$router.push({name: 'Main'})
          self.$store.commit(Constant.SET_LOGIN_STATUS, {isLogin: true})
          self.$store.commit(Constant.SET_USER, payload)
          self.tokenIssuance(data.username, null)
        }
      })
    },
    createUser (fbAccessToken) {
      const self = this
      FB.api('/me?fields=email,name,picture', res => {
        self.$http.post('/users/', {
          email: res.email,
          nickname: res.name,
          picture_url: res.picture.data.url,
          sns_type: 'facebook',
          sns_id: res.id,
          sns_access_token: fbAccessToken,
          username: res.email
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        self.$router.push({name: 'Main'})
      })
    },
    signIn () {
      if (this.username === '' || this.password === '') {
        alert('입력되지 않은 항목이 있습니다')
      } else {
        this.tokenIssuance(this.username, this.password)
      }
    },
    tokenIssuance (username, password) {
      this.$http.post('/users/signin', {
        username,
        password
      }).then(res => {
        const data = res.data.data
        const user = decodeJwt(data['x_access_token'])['user']
        const payload = {
          'id': user.id,
          'username': user.username,
          'nickname': user.nickname,
          'picture_url': user.picture_url
        }
        this.$router.push({name: 'Main'})
        this.$store.commit(Constant.SET_LOGIN_STATUS, {isLogin: true})
        this.$store.commit(Constant.SET_USER, payload)
        setCookie('x-access-token', data['x_access_token'], 1)
      }).catch(err => {
        if (err.response.status === 401) {
          alert('비밀번호가 일치하지 않습니다')
        } else {
          alert('일치하는 아이디가 없습니다')
        }
      })
    }
  }
}
</script>

<style scoped>
span {
  color: #777777;
  font-size: 8px;
}
.btn-fb {
  background: #3b5998;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
}
.btn-fb > .img {
  float: left;
  width: 25px;
}
.btn-fb > .text {
  text-align: center;
}
</style>
