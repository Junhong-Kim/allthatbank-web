<template>
  <div>
    <div class="btn-fb" @click="fbLogin()">
      <img class="img" :src="fbImg">
      <div class="text">Facebook으로 로그인하기</div>
    </div>
    <div style="text-align: center; margin: 20px 0;">또는</div>
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="username" placeholder="아이디(이메일)">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="비밀번호">
      </div>
      <button class="btn btn-success" style="width: 100%;">로그인</button>
    </form>
    <div style="text-align: center; margin: 10px 0;">
      <router-link :to="{name: 'FindPassword'}" tag="span" style="cursor: pointer;">비밀번호 찾기</router-link>
      <span> | </span>
      <router-link :to="{name: 'SignUp'}" tag="span" style="cursor: pointer;">회원가입</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created () {
    this.fbInit()
  },
  data () {
    return {
      fbImg: require('../../assets/facebook.png')
    }
  },
  methods: {
    fbInit () {
      const self = this
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '290894348323672',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.0'
        });
        // FB.getLoginStatus(function(response) {
        //   self.statusChangeCallback(response);
        // });
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js"
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
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
          self.$router.push({name: 'Main'})
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
          sns_access_token: fbAccessToken
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        self.$router.push({name: 'Main'})
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
