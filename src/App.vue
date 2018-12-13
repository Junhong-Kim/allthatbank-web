<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import {decodeJwt, getCookie} from './utils/common'
import AppHeader from '@/components/layout/Header'
import AppFooter from '@/components/layout/Footer'
import Constant from './constant'

/* eslint-disable */
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    this.initData()
    const token = getCookie('x-access-token')
    if (token != null) {
      this.setUser(token)
    }
  },
  watch: {
    $route (to, from){
        this.$store.state.selectBanks = []
        this.$store.state.productList = []
        this.$store.state.depositProductList = []
    }
  },
  methods: {
    initData () {
      // this.fbInit()
      this.$store.dispatch(Constant.SET_BANK_LIST)
    },
    fbInit () {
      const self = this
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '290894348323672',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.0'
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
    setUser (token) {
      const user = decodeJwt(token)['user']
      const payload = {
        'id': user.id,
        'username': user.username,
        'nickname': user.nickname,
        'picture_url': user.picture_url
      }
      this.$store.commit(Constant.SET_LOGIN_STATUS, {isLogin: true})
      this.$store.commit(Constant.SET_USER, payload)
    }
  }
}
</script>

<style>
.custom-container {
  margin-top: 52px;
  background-color: #42b883;
}
</style>
