<template>
  <div class="product-thumbnail" @click="select">
    <div style="float: left; padding: 20px; text-align: center">
      <div><img class="logo" src="../../assets/logo.png"></div>
      <div>우리은행</div>
    </div>
    <div>
      <div style="float: left; margin-right: 50px">
        <div class="join-way">영업점 | 인터넷 | 스마트폰</div>
        <div style="font-size: 24px; font-weight: bold;">우리웰리치100적금</div>
        <div>
          <span class="label" style="float: left; line-height: 24px">기본금리</span>
          <span style="font-size: 14px;">1.5% ~ 1.7%</span>
        </div>
        <div>
          <span class="label" style="float: left; line-height: 24px">우대금리</span>
          <span style="font-size: 14px;">1.7% ~ 1.9%</span>
        </div>
      </div>
      <div class="vl"></div>
      <div>
        <div>
          <span class="label">저축기간</span>
          <span class="badge badge-secondary">6개월</span>
          <span class="badge badge-primary">12개월</span>
          <span class="badge badge-primary">24개월</span>
          <span class="badge badge-secondary">36개월</span>
        </div>
        <div>
          <span class="label">금리유형</span>
          <span class="badge badge-primary">단리</span>
          <span class="badge badge-secondary">복리</span>
        </div>
        <div>
          <span class="label">적립유형</span>
          <span class="badge badge-primary">자유적립식</span>
          <span class="badge badge-secondary">정액적립식</span>
        </div>
        <div>
          <span class="label">가입제한</span>
          <span class="badge badge-primary">제한없음</span>
          <span class="badge badge-secondary">서민전용</span>
          <span class="badge badge-secondary">일부제한</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductThumbnail',
  methods: {
    select () {
      this.$router.push({name: 'SavingProductDetail', params: { id: this.product }})
    }
  },
  props: [
    'product'
  ]
}
</script>

<style scoped>
.product-thumbnail {
  background: white;
  border: 1px solid #42b883;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  position: relative;
  width: 1000px;
}
.product-thumbnail:hover {
  background: #35495e;
  color: white;
  cursor: pointer;
}
.join-way {
  color: #707070;
  font-size: 12px;
}
.logo {
  width: 50px;
}
.label {
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px
}
.vl {
  border-left: 1px solid #eee;
  float: left;
  height: 100px;
  margin-right: 30px;
}
</style>
