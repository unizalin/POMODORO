<template>
  <div class="creditInfo">
    <div class="creditTitle">填寫付款資訊<img src="../assets/icons/card_1.jpg" alt=""><img src="../assets/icons/card_2.png" alt=""><img src="../assets/icons/card_3.png" alt=""></div>
    <div class="creditContent">
      <div class="creditName">
        <label for="creditName" class="title">信用卡號</label>
        <input id="creditName" class="inputName" type="text" :class="creditContent.Number.validate?'':'error'" placeholder="0000 0000 0000 000" v-model.trim="creditContent.Number.text">
      </div>
      <div class="creditNum">
        <label for="creditNum" class="title">有效年月</label>
        <input id="creditNum" type="text" :class="creditContent.Date.validate?'':'error'" v-model.trim="creditContent.Date.text" placeholder="MM/YY">
        <div class="creditSample"><div class="info">請翻至卡片背後，為日期標示之數字</div><img src="../assets/icons/svg/qa_card_date.svg" alt=""></div>
      </div>
      <div class="creditValidate">
        <label for="creditValidate" class="title">驗證碼</label>
        <input id="creditValidate" type="text" placeholder="CVV" :class="creditContent.Val.validate?'':'error'" v-model.trim="creditContent.Val.text">
        <div class="creditSample"><div class="info">請翻至卡片背後，位於簽名欄旁的三碼數字</div><img src="../assets/icons/svg/qa_card.svg" alt=""></div>
      </div>
      <div class="creditPhone">
        <label for="creditPhone" class="title">手機</label>
        <input id="creditPhone" v-model.trim="creditContent.Phone.text" type="text" placeholder="刷卡若採簡訊驗證，將發至您發卡銀行的手機號碼">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      creditContent: {
        Number: {
          text: '',
          validate: true
        },
        Date: {
          text: '',
          validate: true
        },
        Val: {
          text: '',
          validate: true
        },
        Phone: {
          text: '',
          validate: true
        }
      }
    }
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
.creditInfo{
  margin-top: 48px;
  .creditTitle{
    text-align: left;
    img{
      width: 34px;
      height: 24px;
      vertical-align: middle;
      margin: 0 4px;
    }
  }
  .creditNav{
    text-align: left;
    margin-bottom: 20px;
  }
  .creditContent{
    border-left: 2px solid $main;
    padding: 20px 0 20px 32px;
    input[type=text]{
      height: 40px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      color: #909399;
      padding-left: 15px;
    }
    input[type=text].error{
        height: 40px;
        border: 1px solid $orgBorder;
        border-radius: 4px;
        color: #909399;
        padding-left: 15px;
        background-image: url('../assets/icons/svg/icon_error.svg');
        background-repeat: no-repeat;
        background-position: right 4%  center;
    }
    input[type=number]{
      height: 40px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      color: #909399;
      padding-left: 15px;
    }
    input:focus {outline: none; }
    .creditName{
      float: left;
      text-align: left;
      width: 100%;
      margin-bottom: 20px;
      label{
        margin-right: 16px;
      }
      #creditName{
        width: 300px;
      }
    }
    .creditNum{
      position: relative;
      width: 50%;
      margin-bottom: 20px;
      float: left;
      text-align: left;
      label{
        margin-right: 16px;
      }
      #creditNum{
        width: 300px;
        margin-right: 12px;
      }
    }
    .creditValidate{
      position: relative;
      width: 50%;
      float: left;
      margin-bottom: 20px;
      label{
        margin-right: 40px;
      }
      #creditValidate{
        width: 300px;
      }
    }
    .creditPhone{
      width: 100%;
      text-align: left;
      label{
        margin-right: 45px;
      }
      #creditPhone{
        width: 704px;
      }
    }
    .creditSample{
      width: 215px;
      height: 85px;
      display: flex;
      justify-content: center;
      padding: 16px;
      align-items: center;
      border: 1px solid $lightGrayBorder;
      border-radius: 8px;
      background: $lightBg;
      position: absolute;
      top: -200%;
      right: -12%;
      .info{
        width: 60%;
        font-size: 12px;
        margin-right: 12px;
      }
    }
  }
}
</style>
