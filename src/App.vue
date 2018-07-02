<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
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
    this.$store.dispatch(Constant.SET_BANK_LIST)
  }
}
</script>

<style>
.custom-container {
  margin-top: 52px;
  background-color: #42b883;
}
</style>
