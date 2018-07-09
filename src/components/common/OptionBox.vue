<template>
  <div class="option-box">
    <div style="margin-bottom: 20px">
      <div class="dropdown">
        <!-- 은행 -->
        <span class="bank-selector">{{selectBank}}
          <i class="material-icons" style="vertical-align: middle">keyboard_arrow_down</i>
        </span>
        <div class="dropdown-content" style="height: 200px">
          <div v-for="(bank, index) in banks" :key="index" @click="setBank(bank)">{{bank.kor_co_nm}}</div>
        </div>
        <span class="sub-text">에서</span>
      </div>
      <div>
        <!-- 저축기간 -->
        <div class="badge-wrapper" v-for="(period, index) in ['6개월', '12개월', '24개월', '36개월']" :key="'period-' + index" style="">
          <span @click="setPeriod(period)" :class="[selectPeriod.includes(period) ? 'badge badge-primary' : 'badge badge-secondary']">{{period}}</span>
        </div>
        <span class="main-text">동안</span> <span class="sub-text">저축할 거예요</span></div>
      <div>
        <span class="main-text">저축금리</span><span class="sub-text">가</span>
        <!-- 금리유형 -->
        <div class="badge-wrapper" v-for="(intrType, index) in ['단리', '복리']" :key="'intrType-' + index">
          <span @click="setIntrType(intrType)" :class="[selectIntrType.includes(intrType) ? 'badge badge-primary' : 'badge badge-secondary']">{{intrType}}</span>
        </div>
        <span class="sub-text">이고</span> <span class="main-text">적립유형</span><span class="sub-text">은</span>
        <!-- 적립유형 -->
        <div class="badge-wrapper" v-for="(rsrvType, index) in ['정액적립식', '자유적립식']" :key="'rsrvType-' + index">
          <span @click="setRsrvType(rsrvType)" :class="[selectRsrvType.includes(rsrvType) ? 'badge badge-primary' : 'badge badge-secondary']">{{rsrvType}}</span>
        </div>
        <span class="sub-text">중에서</span></div>
      <div>
        <!-- 금리 -->
        <span class="main-text">기본금리</span> <input type="text" placeholder="0" v-model="basicRate"> 이상
        <span class="sub-text">또는</span>
        <span class="main-text">우대금리</span> <input type="text" placeholder="0" min="0" max="99" v-model="primeRate"> 이상
      </div>
    </div>
    <button class="btn search-button" @click="searchForSavingProducts">적금상품을 찾아주세요!</button>
  </div>
</template>

<script>
export default {
  name: 'OptionBox',
  data () {
    return {
      // 은행명
      selectBank: '우리은행',
      selectBankCode: '0010001',
      // 저축 기간
      selectPeriod: [],
      selectPeriodCodes: [],
      // 저축 금리 유형 (S: 단리, M: 복리)
      selectIntrType: [],
      selectIntrTypeCodes: [],
      // 적립 유형 (S: 정액적립식, F: 자유적립식)
      selectRsrvType: [],
      selectRsrvTypeCodes: [],
      // 기본금리
      basicRate: 0,
      // 우대금리
      primeRate: 0,
      banks: this.$store.state.bankList
    }
  },
  methods: {
    setBank (bank) {
      this.selectBank = bank.kor_co_nm
      this.selectBankCode = bank.fin_co_no
    },
    setPeriod (period) {
      if (this.selectPeriod.includes(period)) {
        this.selectPeriod.splice(this.selectPeriod.indexOf(period), 1)
        this.selectPeriodCodes.splice(period === '6개월' ? this.selectPeriodCodes.indexOf(period.substring(0, 1), 1) : this.selectPeriodCodes.indexOf(period.substring(0, 2), 1))
      } else {
        this.selectPeriod.push(period)
        this.selectPeriodCodes.push(period === '6개월' ? period.substring(0, 1) : period.substring(0, 2))
      }
    },
    setIntrType (intrType) {
      if (this.selectIntrType.includes(intrType)) {
        this.selectIntrType.splice(this.selectIntrType.indexOf(intrType), 1)
        this.selectIntrTypeCodes.splice(intrType === '단리' ? 'S' : 'M', 1)
      } else {
        this.selectIntrType.push(intrType)
        this.selectIntrTypeCodes.push(intrType === '단리' ? 'S' : 'M')
      }
    },
    setRsrvType (rsrvType) {
      if (this.selectRsrvType.includes(rsrvType)) {
        this.selectRsrvType.splice(this.selectRsrvType.indexOf(rsrvType), 1)
        this.selectRsrvTypeCodes.splice(rsrvType === '정액적립식' ? 'S' : 'F', 1)
      } else {
        this.selectRsrvType.push(rsrvType)
        this.selectRsrvTypeCodes.push(rsrvType === '정액적립식' ? 'S' : 'F')
      }
    },
    searchForSavingProducts () {
      const self = this
      let params = {
        'fin_co_no': self.selectBankCode,
        'save_trm': self.selectPeriodCodes,
        'intr_rate_type': self.selectIntrTypeCodes,
        'rsrv_type': self.selectRsrvTypeCodes,
        'intr_rate': self.basicRate,
        'intr_rate2': self.primeRate
      }
      self.search(params)
    }
  },
  props: [
    'search'
  ]
}
</script>

<style scoped>
.option-box {
  color: white;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 600px;
  line-height: 40px;
}
.bank-selector {
  cursor: pointer;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  font-size: 25px;
  font-weight: bold;
}
.main-text {
  font-size: 20px;
}
.sub-text {
  font-size: 15px;
}
.badge {
  cursor: pointer;
  font-size: 18px;
}
.search-button {
  background-color: #35495e;
  color: white;
}
input {
  border: none;
  width: 50px;
  font-size: 15px;
  padding: 5px;
  height: 100%;
  text-align: center;
  border-radius: 5px;
}
input:focus {
  outline: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  overflow-y: scroll;
}
.dropdown-content div {
  color: black;
  font-size: 15px;
  padding: 6px;
  text-decoration: none;
  display: block;
}
.dropdown-content div:hover {
  color: white;
  background-color: #35495e;
  cursor: pointer;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.badge-wrapper {
  display: inline;
  padding: 2px;
}
</style>
