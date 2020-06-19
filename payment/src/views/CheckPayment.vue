<template>
  <div class="about">
    <PaymentStep/>
    <div class="checkPaymetStore">
      <div class="paymentTitle">
        <img src="../assets/icons/svg/icon_store.svg" alt="">
        <div class="text">{{selectPayment.title}} 取貨</div>
      </div>
      <div class="content">
        <Credit v-if="selectPayment.id=='credit'" />
        <Store v-if="selectPayment.id=='store'"/>
        <WebAtm/>
        <div class="userInfo">
          <div class="userNav">填寫訂購人資訊</div>
          <div class="userContent">
            <div class="userName">
              <label for="userName" class="title">姓名</label>
              <input id="userName" class="inputName" :class="userContent.Name.validate?'':'error'" type="text" placeholder="請填寫真實姓名" v-model.trim="userContent.Name.text">
            </div>
            <div class="userPhone">
              <label for="userPhone" class="title">手機</label>
              <input id="userPhone"  type="text">
              <input id="phoneNum" type="text"  :class="userContent.Phone.validate?'':'error'"  v-model.trim="userContent.Phone.text">
              <div v-if="!userContent.Phone.validate" class="errMsg">格式錯誤</div>
            </div>
            <div class="userAdd">
              <label for="userAdd" class="title">地址</label>
              <input id="userAddNum" type="text" placeholder="郵遞區號">
              <div class="addBlock">
                <input id="userAdd" type="text"  :class="userContent.Add.validate?'':'error'" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-model.trim="userContent.Add.text">
                <div v-if="!userContent.Add.validate" class="errMsg">本欄位為必填</div>
              </div>
            </div>
            <div class="userEmail">
              <label for="userEmail" class="title">Email</label>
              <input id="userEmail"  :class="userContent.Email.validate?'':'error'" v-model.trim="userContent.Email.text" type="text">
            </div>
          </div>
        </div>
        <div class="recipInfo">
          <div class="recipNav">填寫收件人資訊</div>
          <div class="recipContent">
            <div class="checkSameUser" @click="isSameCheck"><img  :src="require(`../assets/icons/svg/${checkSameUser?'icon_confirm':'icon_oncheck'}.svg`)" alt=""> 同訂購人資料</div>
            <div class="recipName">
              <label for="recipName" class="title">姓名</label>
              <input id="recipName" type="text" :class="recipeContent.Name.validate?'':'error'" placeholder="請填寫真實姓名" v-model.trim="recipeContent.Name.text">
            </div>
            <div class="recipPhone">
              <label for="recipPhone" class="title">手機</label>
              <input id="recipPhone"  type="text">
              <input id="recipPhoneNum" type="text" :class="recipeContent.Phone.validate?'':'error'" v-model.trim="recipeContent.Phone.text">
              <div v-if="!recipeContent.Phone.validate" class="errMsg">格式錯誤</div>
            </div>
            <div class="recipAdd">
              <label for="recipAdd" class="title">地址</label>
              <input id="recipAddNum" type="text" placeholder="郵遞區號">
              <div class="addBlock">
                <input id="recipAdd" type="text" :class="recipeContent.Add.validate?'':'error'" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-model.trim="recipeContent.Add.text">
                <div v-if="!recipeContent.Add.validate" class="errMsg">本欄位為必填</div>
              </div>

            </div>
            <div class="recipEmail">
              <label for="recipEmail" class="title">Email</label>
              <input id="recipEmail" type="text" :class="recipeContent.Email.validate?'':'error'" placeholder="寄送通知會發送至此email" v-model.trim="recipeContent.Email.text">
            </div>
          </div>
        </div>
        <div class="noticeInfo">
          <ul>
            <li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。 </li>
            <li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
            <li>・若您對取貨或付款的方式有疑問，請詳閱「購買說明」。</li>
            <li>・請確認您已詳閱並瞭解本站「購買說明」內容，訂單完成即表示您已同意其中的各項說明。</li>
          </ul>
          <div v-if="!NotifyValidate"  class="noticeCheck" @click="checkNotify=!checkNotify">
            <img :src="require(`../assets/icons/svg/${checkNotify?'icon_confirm':'icon_oncheck'}.svg`)" alt="">確認，我已暸解</div>
          <div v-else class="noticeCheck" @click="checkNotify=!checkNotify">
            <img :src="require(`../assets/icons/svg/${checkNotify?'icon_confirm':'icon_error'}.svg`)" alt="">確認，我已暸解<span class="dobuleCheck" v-if="!checkNotify">請確認</span></div>
        </div>
        <div class="stepRouter">
          <div class="steps">
            <router-link :to="{path: '/'}" class="step perStep" >上一步</router-link>
            <div class="step nextStep" @click="goCheck">下一步</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentStep from '@/components/PaymentStep.vue'
import Credit from '@/components/CreditInfo.vue'
import Store from '@/components/StoreInfo.vue'
import WebAtm from '@/components/WebAtm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CheckPayment',
  components: {
    PaymentStep,
    Credit,
    Store,
    WebAtm
  },
  data () {
    return {
      userNotice: '',
      checkSameUser: false,
      checkNotify: false,
      NotifyValidate: false,
      userPhone: '',
      userAdd: '',
      userEmail: ' ',
      userContent: {
        Name: {
          text: '',
          validate: true
        },
        Phone: {
          text: '',
          validate: true
        },
        Add: {
          text: '',
          validate: true
        },
        Email: {
          text: '',
          validate: true
        }
      },
      recipeContent: {
        Name: {
          text: '',
          validate: true
        },
        Phone: {
          text: '',
          validate: true
        },
        Add: {
          text: '',
          validate: true
        },
        Email: {
          text: '',
          validate: true
        }
      }
    }
  },
  methods: {
    isSameCheck () {
      const vm = this
      vm.checkSameUser = !vm.checkSameUser
      if (vm.checkSameUser) {
        vm.recipeContent.Name.text = vm.userContent.Name.text
        vm.recipeContent.Phone.text = vm.userContent.Phone.text
        vm.recipeContent.Add.text = vm.userContent.Add.text
        vm.recipeContent.Email.text = vm.userContent.Email.text
      } else {
        vm.recipeContent.Name.te = ''
        vm.recipeContent.Phone.te = ''
        vm.recipeContent.Add.te = ''
        vm.recipeContent.Email.te = ''
      }
    },
    goCheck () {
      const vm = this
      if (vm.checkNotify === false) {
        vm.NotifyValidate = true
      }
      // const test = Object.values(vm.userContent).map((item, idx) => console.log('item', idx, item.validate === false))ㄕ
      const userDataArr = Object.values(vm.userContent)
      const recipeDataArr = Object.values(vm.recipeContent)
      console.log('userDataArr', userDataArr)
      userDataArr.forEach(element => {
        if (element.text.length > 0) {
          element.validate = true
        } else {
          element.validate = false
        }
      })
      recipeDataArr.forEach(element => {
        if (element.text.length > 0) {
          element.validate = true
        } else {
          element.validate = false
        }
      })
      if (userDataArr.every(item => item.validate === true) && recipeDataArr.every(item => item.validate === true)) {
        console.log('資料 all done')
        vm.$router.push({ path: '/success' })
      }
    }
  },
  computed: {
    ...mapGetters(['selectPayment'])
  },
  watch: {
    'userContent.Name.text' () {
      const vm = this
      if (vm.userContent.Name.text.length > 0) {
        vm.userContent.Name.validate = true
      }
    },
    'userContent.Phone.text' () {
      const vm = this
      if (vm.userContent.Phone.text.length > 0) {
        vm.userContent.Phone.validate = true
      }
      var phoneRule = /^09\d{8}$/
      if (vm.userContent.Phone.text.search(phoneRule) < 0) {
        vm.userContent.Phone.validate = false
      } else {
        vm.userContent.Phone.validate = true
      }
    },
    'userContent.Add.text' () {
      const vm = this
      if (vm.userContent.Add.text.length > 0) {
        vm.userContent.Add.validate = true
      }
    },
    'userContent.Email.text' () {
      const vm = this
      if (vm.userContent.Email.text.length > 0) {
        vm.userContent.Email.validate = true
      }
      // eslint-disable-next-line no-useless-escape
      var emailRule = /^\w+((-\w+)|(\.\w+)|(\+\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      if (vm.userContent.Email.text.search(emailRule) < 0) {
        vm.userContent.Email.validate = false
      } else {
        vm.userContent.Email.validate = true
      }
    },
    'recipeContent.Name.text' () {
      const vm = this
      if (vm.recipeContent.Name.text.length > 0) {
        vm.recipeContent.Name.validate = true
      }
    },
    'recipeContent.Phone.text' () {
      const vm = this
      if (vm.recipeContent.Phone.text.length > 0) {
        vm.recipeContent.Phone.validate = true
      }
      var phoneRule = /^09\d{8}$/
      if (vm.recipeContent.Phone.text.search(phoneRule) < 0) {
        vm.recipeContent.Phone.validate = false
      } else {
        vm.recipeContent.Phone.validate = true
      }
    },
    'recipeContent.Add.text' () {
      const vm = this
      if (vm.recipeContent.Add.text.length > 0) {
        vm.recipeContent.Add.validate = true
      }
    },
    'recipeContent.Email.text' () {
      const vm = this
      if (vm.recipeContent.Email.text.length > 0) {
        vm.recipeContent.Email.validate = true
      }
    },
    'isSameCheck' () {
      const vm = this
      if (vm.checkSameUser) {
        vm.recipeContent.Name.text = vm.userContent.Name.text
        vm.recipeContent.Phone.text = vm.userContent.Phone.text
        vm.recipeContent.Add.text = vm.userContent.Add.text
        vm.recipeContent.Email.text = vm.userContent.Email.text
      } else {
        vm.recipeContent.Name.te = ''
        vm.recipeContent.Phone.te = ''
        vm.recipeContent.Add.te = ''
        vm.recipeContent.Email.te = ''
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
.checkPaymetStore {
  width: 820px;
  margin: 0 auto;
}
.paymentTitle{
  margin: 44px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
}
.errMsg{
  color: $orgBorder;
  font-size: 14px;
}
.userInfo{
  margin-top: 48px;
  .userNav{
    text-align: left;
    margin-bottom: 20px;
  }
  .userContent{
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
    input:focus {outline: none; }
    .userName{
      text-align: left;
      float: left;
      width: 50%;
      margin-bottom: 20px;
      label{
        margin-right: 40px;
      }
      #userName{
        width: 300px;
      }
    }
    .userPhone{
      margin-bottom: 20px;
      label{
        margin-right: 20px;
      }
      #userPhone{
        width: 75px;
        margin-right: 12px;
      }
      #phoneNum{
        width: 230px;
      }
    }
    .userAdd{
      display: flex;
      align-self: start;
      width: 100%;
      text-align: left ;
      margin-bottom: 20px;
      label{
        margin-right: 40px;
      }
      #userAddNum{
        width: 90px;
        margin-right: 12px;
      }
      #userAdd{
        width: 600px;
      }
      .addBlock{
        position: relative;
        .errMsg{
          position: absolute;
        }
      }
    }
    .userEmail{
      width: 100%;
      text-align: left;
      label{
        margin-right: 32px;
      }
      #userEmail{
        width: 704px;
      }
    }
  }
}
.recipInfo{
  margin-top: 20px;
  .recipNav{
    text-align: left;
    margin-bottom: 20px;
  }
  .checkSameUser{
    cursor: pointer;
    text-align: left;
    margin-bottom: 20px;
    img{
      vertical-align: middle;
      margin-right: 8px;
    }
  }
  .recipContent{
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
    input:focus {outline: none; }
    .recipName{
      text-align: left;
      float: left;
      width: 50%;
      margin-bottom: 20px;
      label{
        margin-right: 40px;
      }
      #recipName{
        width: 300px;
      }
    }
    .recipPhone{
      margin-bottom: 20px;
      label{
        margin-right: 20px;
      }
      #recipPhone{
        width: 75px;
        margin-right: 12px;
      }
      #recipPhoneNum{
        width: 230px;
      }
    }
    .recipAdd{
      width: 100%;
      text-align: left ;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      label{
        margin-right: 40px;
      }
      #recipAddNum{
        width: 90px;
        margin-right: 12px;
      }
      #recipAdd{
        width: 600px;
      }
      .addBlock{
        position: relative;
        .errMsg{
          position: absolute;
        }
      }
    }
    .recipEmail{
      width: 100%;
      text-align: left;
      label{
        margin-right: 32px;
      }
      #recipEmail{
        width: 704px;
      }
    }
  }
}
.noticeInfo{
  margin-top:20px;
  width: 860px;
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
  .noticeCheck{
    cursor:pointer;
    text-align: left;
    img{
      vertical-align: middle;
      margin-right: 12px;
    }
    .dobuleCheck{
      margin-left: 8px;
      color: $orgBorder;
    }
  }
}
.stepRouter{
  width: 860px;
  margin: 20px auto;
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
