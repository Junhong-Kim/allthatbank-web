<template>
  <div class="container">
    <div class="row row-centered">
      <bank class="col-md-2 col-border"
            v-for="(bank, index) in banks"
            :key="index"
            :bank="bank">
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
  }
}
</script>

<style scoped>
.row-centered {
  background: white;
  position: static;
  text-align: center;
}

.col-border {
  position: static;
}

.col-border:hover {
  background: #35495e;
  color: black;
}
</style>
