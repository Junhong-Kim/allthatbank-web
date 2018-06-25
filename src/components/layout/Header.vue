<template>
  <nav>
    <ul>
      <router-link tag="li" active-class="active" to="/" exact>
        <img class="brand-logo" src="../../assets/logo.png" v-text="appName">
        <span class="brand-name">{{appName}}</span>
      </router-link>
      <router-link tag="li" active-class="active" to="/savingProduct"><a>적금</a></router-link>
      <router-link tag="li" active-class="active" to="/depositProduct"><a>예금</a></router-link>
      <router-link tag="li" active-class="active" to="/community"><a>커뮤니티</a></router-link>
      <router-link tag="li" active-class="active" to="/login"><a>로그인</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      appName: 'All That Bank'
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

.router-link-exact-active {
  background-color: #42b883;
}
</style>
