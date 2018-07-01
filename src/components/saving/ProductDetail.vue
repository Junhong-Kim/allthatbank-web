<template>
  <div style="background: #f9f9f9; padding-bottom: 30px;">
    <div class="product-wrapper">
      <div class="title">상품 정보</div>
      <div class="detail">
        <div class="join-way">영업점 | 인터넷 | 스마트폰</div>
        <div class="product-name">우리웰리치100적금</div>
        <div>
          <span class="label">저축기간</span>
          <span class="text">12개월</span>
          <span class="text">24개월</span>
        </div>
        <div>
          <span class="label">금리유형</span>
          <span class="text">단리</span>
        </div>
        <div>
          <span class="label">적립유형</span>
          <span class="text">자유적립식</span>
        </div>
        <div>
          <span class="label">최고한도</span>
          <span class="text">3,000,000원</span>
        </div>
        <div>
          <span class="label">상품금리</span><br>
          <table>
            <tr>
              <th>가입기간</th>
              <th>기본금리(%)</th>
              <th>최고 우대금리(%)</th>
            </tr>
            <tr>
              <td>12개월</td>
              <td>1.5</td>
              <td>1.7</td>
            </tr>
            <tr>
              <td>24개월</td>
              <td>1.6</td>
              <td>1.8</td>
            </tr>
            <tr>
              <td>36개월</td>
              <td>1.7</td>
              <td>1.9</td>
            </tr>
          </table>
          <br>
        </div>
        <div>
          <span class="label">우대조건</span><br>
          <span class="text">
            - 신규 시 아래항목 충족 시 최고 연0.2%p<br>
            1. 연금이체 실적 보유 연 0.1%p<br>
            2. 우리웰리치100연금통장에서 자동이체 연 0.1%p<br>
            3. 우리신용/체크카드 보유 연0.1%p<br>
            4. 인터넷/스마트뱅킹으로 가입 연0.1%p<br>
          </span>
        </div>
        <br>
        <div>
          <span class="label">만기 후 이자율</span><br>
          <span class="text">
            - 1개월이내 : 만기시점약정이율×50%<br>
            - 1개월초과 6개월이내: 만기시점약정이율×30%<br>
            - 6개월초과 : 만기시점약정이율×20%<br>
            ※ 만기시점 약정이율 : 일반정기적금 금리<br>
          </span>
        </div>
        <br>
        <div>
          <span class="label">기타 유의사항</span><br>
          <span class="text">해당없음</span>
        </div>
        <br>
        <div>
          <span class="label">가입제한</span>
          <span class="text">제한없음</span>
        </div>
        <div>
          <span class="label">가입대상</span>
          <span class="text">실명의 개인</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail'
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
  width: 60%;
}
th {
  background: #eee;
  border: 1px solid #707070;
  color: black;
  text-align: center;
  width: 20%;
}
tr, td {
  color: #707070;
  border: 1px solid #707070;
  text-align: center;
}
</style>
