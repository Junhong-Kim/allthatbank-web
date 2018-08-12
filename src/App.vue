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

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    const token = getCookie('x-access-token')
    if (token != null) {
      this.setLocalUser(token)
    }
    this.$store.dispatch(Constant.SET_BANK_LIST)
  },
  methods: {
    setLocalUser (token) {
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
