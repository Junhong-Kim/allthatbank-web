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
      console.log(name)
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #ddd;
  cursor: pointer;
}

.bank-image {
  height: 30px;
  padding: 5px;
  width: 30px;
}
</style>
