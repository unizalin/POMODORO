<template>
  <div class="about">
    <PaymentStep/>
    <div class="checkPaymetStore">
      <div class="paymentTitle">
        <div class="text">訂購成功！</div>
        <div v-if="selectPayment.id=='store'" class="content">感謝您的訂購，請您在2019/08/10,am00:00前繳費 至超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</div>
        <div v-else class="content">感謝您的訂購，我們將儘速為您出貨！</div>
        <div class="gif"><img src="../assets/icons/svg/img_complete.svg" alt=""></div>
      </div>
      <div class="content">
        <div class="orderInfo">
          <div class="orderTitle">訂單資訊 (JC293016)</div>
          <table class="orderTable">
            <tr class="nav">
              <th></th>
              <th>顏色</th>
              <th>數量</th>
              <th></th>
              <th>價格</th>
            </tr>
            <tr>
              <td>長版無袖洋裝</td>
              <td>1</td>
              <td>綠色</td>
              <td></td>
              <td>599元</td>
            </tr>
            <tr>
              <td>大球氣質銀飾耳環(針式)</td>
              <td>1</td>
              <td>紅色</td>
              <td></td>
              <td>281元</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>運費</td>
              <td>60元</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>共2品項，總計</td>
              <td>NT$ 940</td>
            </tr>
          </table>
          <div class="storeInfo">
            <div class="store storeTitle">取得資訊 <img src="../assets/icons/logo_family.png" alt=""></div>
            <div class="store storeName">
              <div class="title">取貨店名</div>
              <div class="name">復興</div>
            </div>
            <div class="store storeAdd">
              <div class="title">取貨地址</div>
              <div class="content">台北市大安區復興路999段99號1巷</div>
            </div>
          </div>
          <div class="payInfo">
            <div class="payTitle">付款資訊</div>
            <div class="content" v-if="selectPayment.id=='store'">
              <div class="amount">需付金額：940元</div>
              <div class="paycode">繳費代碼：Rh7847213183</div>
              <div class="payDate">繳費期限：2019/08/10,am00:00</div>
              <div class="payStatus">狀態：待付款</div>
            </div>
            <div class="content" v-else-if="selectPayment.id=='credit'">
              <div class="amount">信用卡刷卡：940元</div>
              <div class="paycode">手續費：0元</div>
              <!-- <div class="payDate">繳費期限：2019/08/10,am00:00</div> -->
              <div class="payStatus">狀態：待付款</div>
            </div>
            <div class="content" v-else-if="selectPayment.id=='atm'">
              <div class="amount">Web ATM付款：940元</div>
              <div class="paycode">付款銀行：玉山銀行</div>
              <div class="payDate">手續費：15元</div>
              <div class="payStatus">狀態：已完成付款</div>
            </div>
            <div class="content" v-else-if="selectPayment.id=='line'">
              <div class="amount">LINE Pay付款：940元</div>
              <div class="paycode">LINE Point折抵：65元</div>
              <div class="payDate">手續費：0元</div>
              <div class="payStatus">狀態：已完成付款</div>
            </div>
          </div>
        </div>
        <div class="stepRouter">
          <div class="steps">
            <div class="step perStep">會員專區</div>
            <div class="step nextStep" @click="goCheck">返回首頁</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentStep from '@/components/PaymentStep.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CheckPayment',
  components: {
    PaymentStep
  },
  data () {
    return {
      userNotice: '',
      checkSameUser: false,
      checkNotify: false,
      NotifyValidate: false,
      userName: {
        text: '',
        valideate: false
      },
      userPhone: {
        text: '',
        valideate: false
      },
      userAdd: {
        text: '',
        valideate: false
      },
      userEmail: {
        text: '',
        valideate: false
      },
      recipName: {
        text: '',
        valideate: false
      },
      recipPhone: {
        text: '',
        valideate: false
      },
      recipAdd: {
        text: '',
        valideate: false
      },
      recipEmail: {
        text: '',
        valideate: false
      }
    }
  },
  methods: {
    isSameCheck () {
      const vm = this
      vm.checkSameUser = !vm.checkSameUser
      if (vm.checkSameUser) {
        vm.recipName.text = vm.userName.text
        vm.recipPhone.text = vm.userPhone.text
        vm.recipAdd.text = vm.userAdd.text
        vm.recipEmail.text = vm.userEmail.text
      } else {
        vm.recipName.text = ''
        vm.recipPhone.text = ''
        vm.recipAdd.text = ''
        vm.recipEmail.text = ''
      }
    },
    goCheck () {
      alert('ff')
      const vm = this
      if (!vm.checkNotify) {
        vm.NotifyValidate = !vm.NotifyValidate
      }
    }
  },
  computed: {
    ...mapGetters(['selectPayment'])
  }
}
</script>
<style lang="scss" scoped>
$main: #4BC9C9;
$darkBlackText: #303133;
$mediumBlackText: #606266;
$lightBlackText: #909399;

$darkGrayBorder: #909399;
$lightGrayBorder: #e4e7ed;
$orgBorder: #FA5555;

$mediumBg:#f0f2f5;
$lightBg: #F5F7FA;

$white: #fff;
.checkPaymetStore {
  width: 820px;
  margin: 0 auto;
}
.paymentTitle{
  width: 500px;
  text-align: center;
  margin: 44px auto;
  img{
    margin-top: 32px;
    width: 140px;
  }
}

.orderInfo{
  background-color: $lightBg;
  padding: 20px;
  .orderTitle{
    text-align: left;
  }
  .orderTable{
    width: 100%;
    text-align: left;
    tr{
      padding: 8px;
      border-bottom: 1px solid $darkGrayBorder;
    }
  }
}
.storeInfo{
  .store{
    display: flex;
    padding: 4px 0;
    .title{
      margin-right: 12px;
    }
  }
  .storeTitle{
    img{
      width: 132px;
      height: 24px;
      margin-left: 12px;
    }
  }
}
.payInfo{
  margin-top: 20px;
  .payTitle{
    text-align: left;
    padding: 4px 0;
  }
  .content{
    display: flex;
    justify-content: space-between;
  }
}
.stepRouter{
  width: 860px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  .step{
    cursor: pointer;
    padding: 14px 48px;
    border: 1px solid black;
    border-radius: 4px;
  }
  .perStep{
    margin-right: 20px;
  }
  .nextStep{
    background-color: $main;
    border: 1px solid $main;
    color: $white;
  }
}
</style>
