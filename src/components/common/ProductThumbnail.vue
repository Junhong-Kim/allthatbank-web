<template>
  <div class="product-thumbnail" @click="select">
    <div class="bank-wrap">
      <div><img class="logo" src="../../assets/logo.png"></div>
      <div>{{product.bank_name}}</div>
    </div>
    <div>
      <div class="option-wrap">
        <div class="join-way">{{product.join_way}}</div>
        <div class="product-name">{{product.product_name}}</div>
        <div>
          <span class="label rate-title">기본금리</span>
          <span class="rate-value">{{product.basic_rate_min}}% ~ {{product.basic_rate_max}}%</span>
        </div>
        <div>
          <span class="label rate-title">우대금리</span>
          <span class="rate-value">{{product.prime_rate_min}}% ~ {{product.prime_rate_max}}%</span>
        </div>
      </div>
      <div class="vl"></div>
      <div>
        <div>
          <span class="label">저축기간</span>
          <span :class="[product.months_06 ? 'badge badge-primary' : 'badge badge-secondary']">6개월</span>
          <span :class="[product.months_12 ? 'badge badge-primary' : 'badge badge-secondary']">12개월</span>
          <span :class="[product.months_24 ? 'badge badge-primary' : 'badge badge-secondary']">24개월</span>
          <span :class="[product.months_36 ? 'badge badge-primary' : 'badge badge-secondary']">36개월</span>
        </div>
        <div>
          <span class="label">금리유형</span>
          <span :class="[product.rate_type_s ? 'badge badge-primary' : 'badge badge-secondary']">단리</span>
          <span :class="[product.rate_type_m ? 'badge badge-primary' : 'badge badge-secondary']">복리</span>
        </div>
        <div>
          <span class="label">적립유형</span>
          <span :class="[product.rsrv_type_s ? 'badge badge-primary' : 'badge badge-secondary']">정액적립식</span>
          <span :class="[product.rsrv_type_f ? 'badge badge-primary' : 'badge badge-secondary']">자유적립식</span>
        </div>
        <div>
          <span class="label">가입제한</span>
          <span :class="[product.join_deny === '1' ? 'badge badge-primary' : 'badge badge-secondary']">제한없음</span>
          <span :class="[product.join_deny === '2' ? 'badge badge-primary' : 'badge badge-secondary']">서민전용</span>
          <span :class="[product.join_deny === '3' ? 'badge badge-primary' : 'badge badge-secondary']">일부제한</span>
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
.bank-wrap {
  float: left;
  padding: 15px;
  margin-right: 5px;
  text-align: center;
}
.option-wrap {
  float: left;
  margin-right: 50px;
  width: 30%;
}
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
.product-name {
  font-size: 22px;
  font-weight: bold;
}
.rate-title {
  float: left;
  line-height: 22px;
}
.rate-value {
  font-size: 14px;
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
