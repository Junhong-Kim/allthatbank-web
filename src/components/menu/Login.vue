<template>
  <div>
    <div class="custom-container title">Login</div>
    <div class="container">
      <div class="box">
        <button class="btn btn-primary" @click="fbLogin()">페이스북으로 로그인하기</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created () {
    this.fbInit()
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
        FB.getLoginStatus(function(response) {
          self.statusChangeCallback(response);
        });
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
        scope: 'public_profile, email, user_birthday, user_gender'
      })
    },
    statusChangeCallback (res) {
      const status = res.status
      if (status === 'connected') {
        console.log('Login success', res)
        this.setFbAccountInfoAPI()
      } else {
        console.log('Login fail')
      }
    },
    setFbAccountInfoAPI () {
      const self = this
      FB.api('/me?fields=email,birthday,gender,picture', res => {
        console.log(res)
        self.$router.push({name: 'Main'})
      })
    }
  }
}
</script>

<style scoped>
.title {
  color: white;
  padding: 15px;
  font-size: 25px;
  text-align: center;
}
.container {
  padding: 0;
  border: 1px solid red;
  height: calc(100vh - 235px);
  width: 33%;
  margin: 0 auto;
  text-align: center;
}
.container > .box {
  border: 1px solid blue;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
