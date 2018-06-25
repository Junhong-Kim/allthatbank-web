<template>
  <nav>
    <div class="contents">
      <div class="copyright">
        <ul>
          <li><a href="http://inma.tistory.com/" target="_blank"><img class="icon" src="../../assets/tistory.png"></a></li>
          <li><a href="https://github.com/Junhong-Kim" target="_blank"><img class="icon" src="../../assets/github.png"></a></li>
        </ul>
        Copyright © Junhong Kim. All rights reserved.
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
nav {
  border-top: 1px solid #EAEAEA;
  width: 100%;
  height: 90px;
  text-align: center;
}

.contents {
  display: inline-block;
  line-height: 45px;
  width: 50%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  text-decoration: none;
  display: inline;
  padding: 5px;
}

.icon {
  width: 30px;
}

.copyright {
  font-size: 15px;
  color: #707070;
}

</style>
