<template>
  <div @click="select(bank.name)" class="box">
    <img class="bank-image" :src="logo">
    <div>{{bank.name}}</div>
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
    select (name) {
      this.$emit('select', name)
    }
  }
}
</script>

<style scoped>
.box {
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
}
.bank-image {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
</style>
