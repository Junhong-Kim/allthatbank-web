<template>
  <div @click="select(bank.fin_co_no)" class="box">
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
  height: 100px;
}

.bank-name {
  padding: 40px 10px;
  font-size: 15px;
}
</style>
