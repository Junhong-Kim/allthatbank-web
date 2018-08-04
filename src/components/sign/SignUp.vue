<template>
  <div>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" id="nickname" placeholder="닉네임">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="username" placeholder="아이디(이메일)">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="비밀번호">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="passwordCheck" placeholder="비밀번호 확인">
      </div>
      <button class="btn btn-success" style="width: 100%;">회원가입</button>
    </form>
    <div style="text-align: center; margin: 10px 0;">
      <router-link :to="{name: 'FindPassword'}" tag="span" style="cursor: pointer;">비밀번호 찾기</router-link>
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
