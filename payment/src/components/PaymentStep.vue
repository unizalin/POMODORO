<template>
  <div class="hello">
    <div class="paymentStep">
      <div class="step order">
        <div class="orderTitle"><img src="../assets/icons/svg/icon_confirm.svg" alt=""><span class="text">確認購物車</span></div>
        <div class="stepSvg"><img src="../assets/icons/svg/icon_arrow.svg" alt=""></div>
      </div>
      <div class="step check" :class="this.$route.path=='/success'?'active':''">
        <div class="orderTitle">
          <img v-if="this.$route.path=='/success'" src="../assets/icons/svg/icon_confirm.svg" alt="">
          <img v-else src="../assets/icons/svg/icon_step2.svg" alt="">
          <span :class="this.$route.path!='/success'?'show':''">選擇配送付款方式</span></div>
        <div class="stepSvg">
          <img  src="../assets/icons/svg/icon_arrow.svg" alt="">
        </div>
      </div>
      <div class="step success" :class="this.$route.path=='/success'?'active':''">
        <div class="orderTitle">
          <img v-if="this.$route.path=='/success'" src="../assets/icons/svg/icon_confirm.svg" alt="">
          <img v-else src="../assets/icons/svg/icon_step3.svg" alt="">
          <span :class="this.$route.path=='/success'?'show':''">確認訂購</span>
        </div>
      </div>
    </div>
    <div v-if="this.$route.path!='/success'" class="orderStatement">
      <div class="state">
        <div class="orderInfo">
          <div class="orderTitle">
            <div class="chi">訂單明細</div>
            <div class="eng">(JC293016)</div>
          </div>
        </div>
        <div class="orderAmount">
          <div class="amount productAmount">
            <div class="productTitle">商品小計</div>
            <div class="price">NT$ 880</div>
          </div>
          <div class="amount freightAmount">
            <div class="freightTitle">運費</div>
            <div class="price">NT$ 60</div>
          </div>
          <div class="amount totalAmount">
            <div class="amountTitle">總金額</div>
            <div class="price">NT$ 940</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.paymentStep{
  max-width: 820px;
  margin: 0 auto;
  background-color: #F5F7FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(20px);
  .step{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    padding: 12px 24px;
    .orderTitle{
      display: flex;
      align-items: center;
      img{
        margin-right: 16px;
      }
    }
    .stepSvg{
      margin-left: 16px;;
    }
  }
  @media(max-width:540px){
    .step{
      width: inherit;
    }
  }
  .order{
    color: $main;
  }
  .success{
    color: $lightBlackText;
  }
  .active{
    color: $main;
  }
  @media(max-width:540px){
    .order,.check,.success{
      span{
        display: none;
      }
      span.show{
        display: block;
      }
    }
  }
}
@media(max-width:720px){
  .paymentStep{
    justify-content:space-around
  }
}

.orderStatement{
  width: 100%;
  height: 130px;
  background: transparent linear-gradient(270deg, #82D6D6 0%, #8BC1EF 100%) 0% 0% no-repeat padding-box;
  .state{
    height: 100%;
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .orderInfo{
    border-left: 1px solid $white;
    color: $white;
    .orderTitle{
      padding-left: 16px;
      .chi{
        font-size: 36px;
      }
    }
  }
  .orderAmount{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    color: $white;
    .amount{
      display: flex;
    }
    .totalAmount{
      color: $white;
      font-size: 24px;
      font-weight: bold;
    }
  }
  @media(max-width: 720px){
    .orderAmount{
      flex-direction: column;
      align-items: start;
      width: 50%;
      color: $white;
      .amount{
        display: flex;
      }
      .totalAmount{
        color: $white;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>
