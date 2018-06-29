<template>
  <div class="bank-grid">
    <div v-for="(bank, index) in banks" :key="index" >
      <bank v-if="index === 9" class="bank-grid-item" :bank="bank" style="clear: both"
            @select="select" :class="{active: selectBanks.includes(bank.name)}">
      </bank>
      <bank v-else class="bank-grid-item" :bank="bank"
            @select="select" :class="{active: selectBanks.includes(bank.name)}">
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
      banks: [
        {
          name: 'IBK기업은행',
          logo: 'logo.png'
        }, {
          name: 'KDB산업은행',
          logo: 'logo.png'
        }, {
          name: 'KEB하나은행',
          logo: 'logo.png'
        }, {
          name: 'SC제일은행',
          logo: 'logo.png'
        }, {
          name: '경남은행',
          logo: 'logo.png'
        }, {
          name: '광주은행',
          logo: 'logo.png'
        }, {
          name: '국민은행',
          logo: 'logo.png'
        }, {
          name: '농협은행',
          logo: 'logo.png'
        }, {
          name: '대구은행',
          logo: 'logo.png'
        }, {
          name: '부산은행',
          logo: 'logo.png'
        }, {
          name: '수협은행',
          logo: 'logo.png'
        }, {
          name: '신한은행',
          logo: 'logo.png'
        }, {
          name: '씨티은행',
          logo: 'logo.png'
        }, {
          name: '우리은행',
          logo: 'logo.png'
        }, {
          name: '전북은행',
          logo: 'logo.png'
        }, {
          name: '제주은행',
          logo: 'logo.png'
        }, {
          name: '카카오뱅크',
          logo: 'logo.png'
        }, {
          name: '케이뱅크',
          logo: 'logo.png'
        }
      ]
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
