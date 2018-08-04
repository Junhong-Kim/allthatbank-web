<template>
  <div>
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="username" placeholder="아이디(이메일)">
      </div>
      <button class="btn btn-success" style="width: 100%;">비밀번호 찾기</button>
    </form>
    <div style="text-align: center; margin: 10px 0;">
      <router-link :to="{name: 'SignUp'}" tag="span" style="cursor: pointer;">회원가입</router-link>
      <span> | </span>
      <router-link :to="{name: 'SignIn'}" tag="span" style="cursor: pointer;">로그인</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
  color: #777777;
  font-size: 8px;
}
</style>
