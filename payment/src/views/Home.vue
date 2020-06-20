<template>
  <div class="container">
    <PaymentStep/>
    <div class="paymetMethods">
      <div class="payment store" :class="selectPayment.id==item.id?'userSelectPayment':''" v-for="(item,idx) in paymentList" :key="idx" :id="item.id"  @click="select({id:item.id,title:item.title,img:item.img})">
        <div class="paymentSelect">
          <img :src="require(`../assets/icons/svg/${selectPayment.id==item.id?'icon_confirm.svg' : 'icon_confirm_normal.svg'}`)" alt="">
        </div>
        <div class="paymentInfo">
          <div class="img"><img :src="require(`../assets/${item.img}`)" alt=""></div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="paymentNotice">
      <ul>
        <li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
        <li>・使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
        <li>・每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
        <li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
        <li>・若您對取貨或付款的方式有疑問，請詳閱<span>「購買說明」</span>。</li>
        <li>・請確認您已詳閱並瞭解本站<span>「購買說明」</span>內容，訂單完成即表示您已同意其中的各項說明。</li>
      </ul>
    </div>
    <div class="stepRouter">
      <div class="steps">
        <div class="step perStep">上一步</div>
        <div class="step nextStep" @click="goCheckPay()">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentStep from '@/components/PaymentStep.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    PaymentStep
  },
  data () {
    return {
      paymentList: [
        {
          id: 'store',
          title: '超商取貨',
          content: '24隔日取貨說明',
          img: 'icons/svg/icon_store.svg'
        },
        {
          id: 'credit',
          title: '信用卡',
          content: 'VISA, Master, JCB, 聯合信用卡',
          img: 'icons/svg/icon_card.svg'
        },
        {
          id: 'line',
          title: 'LINE Pay',
          content: '使用line point折抵消費',
          img: 'icons/svg/line_pay.svg'
        },
        {
          id: 'union',
          title: '銀聯卡',
          content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
          img: 'icons/unionpay.png'
        },
        {
          id: 'atm',
          title: 'Web ATM',
          content: '網路銀行ATM操作說明',
          img: 'icons/svg/icon_atm.svg'
        }
      ]
    }
  },
  methods: {
    goCheckPay () {
      const vm = this
      if (vm.selectPayment.id.length > 0) {
        vm.$router.push({ path: '/checkPayment' })
      } else {
        alert('ss')
      }
    },
    ...mapActions(['select'])
  },
  computed: {
    ...mapGetters(['selectPayment'])
  }
}
</script>
<style lang="scss" scope>
$main: #4BC9C9;
$darkBlackText: #303133;
$mediumBlackText: #606266;
$lightBlackText: #909399;

$darkGrayBorder: #909399;
$lightGrayBorder: #e4e7ed;
$orgBorder: #FA5555;

$mediumBg:#f0f2f5;
$lishtBg: #F5F7FA;

$white: #fff;
*{
  // outline: 1px solid black;
  box-sizing: border-box;
}
.home{
  margin: 0 auto;
}

.paymetMethods{
  max-width: 860px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .userSelectPayment{
    border: 1px solid $main !important;
    background-color: $lishtBg;
  }
  .payment{
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid black;
    width: 400px;
    padding: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .paymentInfo{
      display: flex;
      margin-left: 24px;
      align-items: center;
      img{
        display: block;
        width: 80px;
        height: auto;
      }
      .text{
        margin-left: 24px;
        text-align: left;
        .title{
          margin-bottom: 4px;
        }
      }
    }
  }
}
.paymentNotice{
  margin-top:20px;
  max-width: 860px;
  margin: 0 auto;
  background-size: contain;
  background-image: url('../assets/icons/svg/icon_notice.svg');
  background-repeat: no-repeat;
  background-position: right 0;
  ul{
    list-style: none;
    li{
      text-align: left;
      font-size: 12px;
    }
  }
}
.stepRouter{
  max-width: 860px;
  margin: 20px auto;
  font-size: 20px;
  .steps{
    float: right;
  }
  .step{
    cursor: pointer;
    float: left;
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
