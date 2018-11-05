<template>
  <nav style="position: relative; z-index: 10">
    <ul>
      <router-link tag="li" to="/" :style="{ cursor: 'pointer'}">
        <img class="brand-logo" src="../../assets/logo.png" v-text="appName">
        <span class="brand-name">{{appName}}</span>
      </router-link>
      <li><router-link to="/saving">적금</router-link></li>
      <li>
        <div style="position: relative;">
          <div class="badge btn-danger prepare">준비중</div>
          <router-link to="/deposit">예금</router-link>
        </div>
      </li>
      <li><router-link to="/community">커뮤니티</router-link></li>
      <li v-if="isLogin" class="profile">
        <img v-if="user.picture_url == null" :src=profileImg>
        <img v-else :src=user.picture_url>
      </li>
      <li v-else><router-link to="/login">로그인</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      appName: 'All That Bank',
      profileImg: require('../../assets/profile.png')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
ul {
  background-color: #35495e;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li:first-child {
  background: white;
}

li:last-child {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background: #111;
}

.brand-logo {
  width: 52px;
  padding: 10px;
}

.brand-name {
  padding-right: 15px;
}

.router-link-active {
  background-color: #42b883;
}
.prepare {
  position: absolute;
  font-size: 8px;
}
.profile > img {
  width: 32px;
  margin: 10px 15px;
  border-radius: 50%;
}
.profile > img:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
