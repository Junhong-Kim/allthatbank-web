<template>
  <div @click="select(bank.fin_co_no)" class="box">
    <img class="bank-image" :src="logo">
    <div class="bank-name">{{bank.kor_co_nm}}</div>
  </div>
</template>

<script>
export default {
  name: 'Bank',
  props: [
    'bank'
  ],
  data () {
    return {
      logo: require('../../assets/' + this.bank.logo)
    }
  },
  methods: {
    select (finCoNo) {
      this.$emit('select', finCoNo)
    }
  }
}
</script>

<style scoped>
.box {
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
}
.bank-image {
  width: 40px;
}
.bank-name {
  margin-top: 10px;
  font-size: 12px;
}
</style>
