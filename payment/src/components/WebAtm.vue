<template>
  <div class="webAtmInfo">
    <div class="webAtmTitle">付款資訊</div>
    <div class="webAtmContent">
      <div class="webAtmName">
        <label for="webAtmName" class="title">付款銀行</label>
        <select name="" id="webAtmName" v-model="webAtm">
          <option v-for="(item,idx) in webAtmList" :value="item" :key="idx">{{item.name}}</option>
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      webAtmList: [
        {
          id: '004',
          name: '臺灣銀行'
        },
        {
          id: '005',
          name: '臺灣土地銀行'
        },
        {
          id: '006',
          name: '合作金庫商業銀行'
        },
        {
          id: '007',
          name: '第一商業銀行'
        },
        {
          id: '008',
          name: '華南商業銀行'
        },
        {
          id: '009',
          name: '彰化商業銀行'
        },
        {
          id: '011',
          name: '上海商業儲蓄銀行'
        },
        {
          id: '012',
          name: '台北富邦商業銀行'
        },
        {
          id: '013',
          name: '國泰世華商業銀行'
        },
        {
          id: '015',
          name: '中國輸出入銀行'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['webAtm'])
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
    select{
      cursor: pointer;
      height: 40px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      color: #909399;
      padding-left: 15px;
    }
    select:focus{ outline: none;}
    option{
      height: 40px;
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
