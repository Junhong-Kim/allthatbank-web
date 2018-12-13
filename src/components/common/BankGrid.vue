<template>
  <div class="bank-grid">
    <div v-for="(bank, index) in banks" :key="index" >
      <bank v-if="index === banks.length / 2" class="bank-grid-item" :bank="bank" style="clear: both"
            @select="select" :class="{active: selectBanks.includes(bank.fin_co_no)}">
      </bank>
      <bank v-else class="bank-grid-item" :bank="bank"
            @select="select" :class="{active: selectBanks.includes(bank.fin_co_no)}">
      </bank>
    </div>
  </div>
</template>

<script>
import Bank from '@/components/common/Bank'
import Constant from '../../constant'

export default {
  name: 'BankGrid',
  components: {
    Bank
  },
  updated () {
    const payload = {
      fin_co_nos: this.selectBanks
    }
    if (this.$store.state.selectBanks.length > 0 && this.$router.currentRoute.name === 'SavingBankName') {
      this.$store.dispatch(Constant.SET_SAVING_PRODUCT_LIST, payload)
    } else if (this.$store.state.selectBanks.length > 0 && this.$router.currentRoute.name === 'DepositBankName') {
      this.$store.dispatch(Constant.SET_DEPOSIT_PRODUCT_LIST, payload)
    }
  },
  computed: {
    banks () {
      // eslint-disable-next-line
      return this.$store.state.bankList.sort(function (a, b) {
        return a.kor_co_nm < b.kor_co_nm ? -1 : a.kor_co_nm > b.kor_co_nm ? 1 : 0
      })
    },
    selectBanks () {
      return this.$store.state.selectBanks
    }
  },
  methods: {
    sort (a, b) {
      return a.kor_co_nm < b.kor_co_nm ? -1 : a.kor_co_nm > b.kor_co_nm ? 1 : 0
    },
    select (finCoNo) {
      if (this.selectBanks.includes(finCoNo)) {
        this.selectBanks.splice(this.selectBanks.indexOf(finCoNo), 1)
      } else {
        this.$store.state.selectBanks.push(finCoNo)
      }
      // 선택한 은행이 없을 때 상품 리스트 초기화
      if (this.selectBanks.length === 0 && this.$router.currentRoute.name === 'SavingBankName') {
        this.$store.state.productList = []
      } else if (this.selectBanks.length === 0 && this.$router.currentRoute.name === 'DepositBankName') {
        this.$store.state.depositProductList = []
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
