<template>
  <nav>
    <div class="contents">
      <div>
        <span class="copyright">Copyright © Junhong Kim. All rights reserved.</span>
      </div>
      <div class="line"></div>
      <div class="notice">
        <div>
        올댓뱅크는 "금융상품통합비교공시시스템(금융감독원) 금융회사 상품정보" 오픈 API 서비스를 사용한 결과입니다.
        올댓뱅크에서 제공되는 금융회사 상품정보를 복제 또는 저장하거나 전송할 수 없습니다.
        </div>
        <div>
        올댓뱅크에서 제공되는 금융회사 상품정보는 참고사항이며 오류가 발생하거나 지연될 수 있습니다.
        올댓뱅크에서 제공되는 금융회사 상품정보에 대한 법적인 책임을 지지 않습니다.
        </div>
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
  background: #EAEAEA;
  padding: 20px 0;
}
.contents {
  margin: 0 auto;
  width: 70%;
}
.copyright {
  color: gray;
  font-size: 14px;
  font-weight: bold;
}
.line {
  background: white;
  border: 1px solid #f7f7f7;
  margin: 10px 0;
}
.notice {
  color: #777777;
  font-size: 8px;
}
</style>
