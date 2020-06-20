<template>
  <div class="container">
    <div class="paymentStep">
      <div class="step order">
        <div class="svg"><img src="../assets/icons/svg/icon_confirm.svg" alt=""></div>
        <div class="orderTitle">確認購物車</div>
        <div class="stepSvg"><img src="../assets/icons/svg/icon_arrow.svg" alt=""></div>
      </div>
      <div class="step check">
        <div class="svg"><img src="../assets/icons/svg/icon_step2.svg" alt=""></div>
        <div class="orderTitle">選擇配送付款方式</div>
        <div class="stepSvg"><img src="../assets/icons/svg/icon_arrow.svg" alt=""></div>
      </div>
      <div class="step success">
        <div class="svg"><img src="../assets/icons/svg/icon_step3.svg" alt=""></div>
        <div class="orderTitle">確認訂購</div>
      </div>
    </div>
    <div class="orderStatement">
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

<style lang="scss" scoped>
@media (max-width:850px) {
  
}
</style>