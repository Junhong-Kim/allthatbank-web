<template>
  <nav>
    <ul>
      <li v-for="subMenu in subMenus" :key="subMenu.name">
        <router-link :to="subMenu.route">{{subMenu.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['subMenus']
}
</script>

<style scoped>
ul {
  background-color: rgba(53, 73, 94, 0.2);
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
}

li {
  float: left;
}

li a {
  color: #dddddd;
  display: block;
  font-size: 13px;
  padding: 16px 18px;
  text-align: center;
  text-decoration: none;
}

.router-link-active {
  color: white;
}
</style>
