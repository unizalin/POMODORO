<template>
  <div class="webAtmInfo">
    <div class="webAtmTitle">付款資訊</div>
    <div class="webAtmContent">
      <div class="webAtmName">
        <label for="webAtmName" class="title">付款銀行</label>
        <select name="" id="webAtmName" :value="webAtmName.value">
          <option value="1"></option>
        </select>
      </div>
      <div class="webNotice">
        <ul>
          <li>・請先準備好晶片讀卡機與金融卡，以利作業 </li>
          <li>・請選擇您常用的銀行網路ATM，依步驟將金融卡插進讀卡機後進行轉帳 </li>
          <li>・使用台新銀行轉帳免費，他行將酌收15元手續費用/筆</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      webAtmName: {
        id: 1,
        text: ''
      },
      webAtmNum: {
        text: '',
        valideate: false
      },
      webAtmValidate: {
        text: '',
        valideate: false
      },
      webAtmPhone: {
        text: '',
        valideate: false
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
$lishtBg: #F5F7FA;

$white: #fff;
.webAtmInfo{
  margin-top: 48px;
  .webAtmTitle{
    text-align: left;
    img{
      width: 34px;
      height: 24px;
      vertical-align: middle;
      margin: 0 4px;
    }
  }
  .webAtmNav{
    text-align: left;
    margin-bottom: 20px;
  }
  .webAtmContent{
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
    .webAtmName{
      float: left;
      text-align: left;
      width: 100%;
      margin-bottom: 20px;
      label{
        margin-right: 16px;
      }
      #webAtmName{
        width: 300px;
      }
    }
    .webNotice{
      ul{
        list-style: none;
        li{
          text-align: left;
          font-size: 12px;
          color: $lightBlackText;
        }
      }
    }
  }
}
</style>
