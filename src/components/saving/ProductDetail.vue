<template>
  <div style="background: #f9f9f9; padding-bottom: 30px;">
    <div class="product-wrapper">
      <div class="title">상품 정보</div>
      <div class="detail">
        <div class="join-way">{{productJoinWay}}</div>
        <div class="product-name">{{product['product_name']}}</div>
        <div>
          <span class="label">저축기간</span>
          <span class="text">{{productPeriod}}</span>
        </div>
        <div>
          <span class="label">금리유형</span>
          <span class="text">{{productRateType}}</span>
        </div>
        <div>
          <span class="label">적립유형</span>
          <span class="text">{{productRsrvType}}</span>
        </div>
        <div>
          <span class="label">최고한도</span>
          <span class="text">{{productMaxLimit}}</span>
        </div>
        <div>
          <span class="label">상품금리</span><br>
          <table v-if="isDataLoaded === true">
            <tr>
              <th>금리유형</th>
              <th>적립유형</th>
              <th>금리</th>
              <th>6개월</th>
              <th>12개월</th>
              <th>24개월</th>
              <th>36개월</th>
            </tr>
            <tr>
              <td rowspan="5">{{productRateType}}</td>
            </tr>
            <tr>
              <td rowspan="2">정액적립식</td>
              <td>기본(%)</td>
              <td v-for="(month, index) in months" :key="'sb-' + index"
                  v-text="productRsrvTypeS['basic_rate'][month] == null ? '-' : productRsrvTypeS['basic_rate'][month]">
              </td>
            </tr>
            <tr>
              <td>우대(%)</td>
              <td v-for="(month, index) in months" :key="'sp-' + index"
                  v-text="productRsrvTypeS['prime_rate'][month] == null ? '-' : productRsrvTypeS['prime_rate'][month]">
              </td>
            </tr>
            <tr>
              <td rowspan="2">자유적립식</td>
              <td>기본(%)</td>
              <td v-for="(month, index) in months" :key="'fb-' + index"
                  v-text="productRsrvTypeF['basic_rate'][month] == null ? '-' : productRsrvTypeF['basic_rate'][month]">
              </td>
            </tr>
            <tr>
              <td>우대(%)</td>
              <td v-for="(month, index) in months" :key="'fp-' + index"
                  v-text="productRsrvTypeF['prime_rate'][month] == null ? '-' : productRsrvTypeF['prime_rate'][month]">
              </td>
            </tr>
          </table>
          <br>
        </div>
        <div>
          <span class="label">우대조건</span><br>
          <span class="text">{{product['contents_prime_condition']}}</span>
        </div>
        <br>
        <div>
          <span class="label">만기 후 이자율</span><br>
          <div class="text">{{product['contents_maturity_rate']}}</div>
        </div>
        <br>
        <div>
          <span class="label">기타 유의사항</span><br>
          <span class="text">{{product['contents_etc']}}</span>
        </div>
        <br>
        <div>
          <span class="label">가입제한</span>
          <span class="text">{{productJoinDeny}}</span>
        </div>
        <div>
          <span class="label">가입대상</span>
          <span class="text">{{product['join_member']}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {setComma} from '../../utils/common'

export default {
  name: 'ProductDetail',
  created () {
    const params = this.$route.params
    if (params['productId'] === undefined) {
      this.$router.push({name: 'Main'})
    } else {
      this.$http.get('/fss/saving_products/' + params['productId'], {
        params: {
          fin_co_no: params['bankId']
        }
      }).then(res => {
        this.product = res.data.data
        this.isDataLoaded = true
      })
    }
  },
  data () {
    return {
      product: {},
      months: ['months_6', 'months_12', 'months_24', 'months_36'],
      isDataLoaded: false
    }
  },
  computed: {
    productJoinWay () {
      const self = this
      if (this.isDataLoaded === true) {
        let joinWay = self.product['join_way'].split(',')
        return joinWay.join(' | ')
      }
    },
    productJoinDeny () {
      const self = this
      if (this.isDataLoaded === true) {
        switch (self.product['join_deny']) {
          case '1':
            return '제한없음'
          case '2':
            return '서민전용'
          case '3':
            return '일부제한'
        }
      }
    },
    productPeriod () {
      const self = this
      if (this.isDataLoaded === true) {
        let periods = []
        self.product['options']['period'].forEach(period => {
          periods.push(period + '개월 ')
        })
        return periods.join('')
      }
    },
    productRateType () {
      const self = this
      if (this.isDataLoaded === true) {
        return self.product['options']['rate_type'].join(' ')
      }
    },
    productRsrvType () {
      const self = this
      if (this.isDataLoaded === true) {
        return self.product['options']['rsrv_type'].join(' ')
      }
    },
    productMaxLimit () {
      const self = this
      if (this.isDataLoaded === true) {
        return self.product['max_limit'] === null ? '없음' : setComma(self.product['max_limit']) + '원'
      }
    },
    productRsrvTypeS () {
      const self = this
      if (this.isDataLoaded === true) {
        return self.product['options']['rsrv_type_s']
      }
    },
    productRsrvTypeF () {
      const self = this
      if (this.isDataLoaded === true) {
        return self.product['options']['rsrv_type_f']
      }
    }
  }
}
</script>

<style scoped>
.product-wrapper {
  background: #f9f9f9;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
.product-wrapper > .title {
  font-size: 25px;
  margin-left: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}
.product-wrapper > .detail {
  background: white;
  border: 2px solid #42b883;
  padding: 15px;
}
.detail > .join-way {
  color: #707070;
  font-size: 12px;
}
.detail > .product-name {
  color: #35495e;
  font-size: 25px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}
.label {
  border-right: 1px solid #707070;
  font-weight: bold;
  margin-right: 5px;
  padding-right: 5px;
}
.text {
  color: #707070;
}
table {
  margin-left: 5px;
  margin-top: 5px;
}
th {
  background: #eee;
  border: 1px solid #707070;
  color: black;
  text-align: center;
  width: 10%;
}
tr, td {
  color: #707070;
  border: 1px solid #707070;
  text-align: center;
}
</style>
