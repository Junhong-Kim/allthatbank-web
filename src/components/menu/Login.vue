<template>
  <div>
    <div class="title">Login</div>
    <div class="container">
      <div class="centered">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  background-color: #42b883;
  width: 100%;
  margin-top: 52px;
  color: white;
  padding: 10px;
  font-size: 25px;
  text-align: center;
}
.container {
  border: 1px solid black;
  box-shadow: 5px 10px #EAEAEA;
  height: calc(100vh - 425px);
  width: 25%;
  margin: 100px auto;
  padding: 20px;
}
.centered {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
