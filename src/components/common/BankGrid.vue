<template>
  <div class="bank-grid">
    <div v-for="(bank, index) in banks" :key="index" >
      <bank v-if="index === 9" class="bank-grid-item" :bank="bank" style="clear: both"
            @select="select" :class="{active: selectBanks.includes(bank.kor_co_nm)}">
      </bank>
      <bank v-else class="bank-grid-item" :bank="bank"
            @select="select" :class="{active: selectBanks.includes(bank.kor_co_nm)}">
      </bank>
    </div>
  </div>
</template>

<script>
import Bank from '@/components/common/Bank'

export default {
  name: 'BankGrid',
  components: {
    Bank
  },
  data () {
    return {
      selectBanks: [],
      banks: this.$store.state.bankList
    }
  },
  methods: {
    select (name) {
      if (this.selectBanks.includes(name)) {
        this.selectBanks.splice(this.selectBanks.indexOf(name), 1)
      } else {
        this.selectBanks.push(name)
      }
      console.log(this.selectBanks)
    }
  }
}
</script>

<style scoped>
.bank-grid {
  width: 900px;
  margin: 10px auto;
}
.bank-grid-item {
  width: 100px;
  float: left;
  text-align: center;
}
.bank-grid-item:hover {
  background: #35495e;
  color: white;
}
.active {
  background: #35495e !important;
  color: white;
}
</style>
