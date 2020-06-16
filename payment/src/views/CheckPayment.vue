<template>
  <div class="about">
    <PaymentStep/>
    <div class="checkPaymetStore">
      <div class="paymentTitle">
        <img src="../assets/icons/svg/icon_store.svg" alt="">
        <div class="text">超商付款 取貨</div>
      </div>
      <div class="content">
        <div class="selectStore">
          <div class="storeNav">
            <div class="title">選擇取貨門市</div>
            <div class="selectOption">
              <div class="choiceStore">
                <img src="../assets/icons/svg/icon_add.svg" alt="">選擇取貨門市
              </div>
              <div class="favStore">
                <img src="../assets/icons/svg/icon_like.svg" alt="">選擇常用門市
                <div class="isFavStore">
                  <div class="isStore">
                    <div class="isStoreName">南山</div>
                    <div class="isStoreAdd">台北市大安區復興路999段99號1巷</div>
                  </div>
                  <div class="isStore">
                    <div class="isStoreName">台北車站</div>
                    <div class="isStoreAdd">台北市大安區復興路999段99號1巷</div>
                  </div>
                  <div class="isStore">
                    <div class="isStoreName">京站</div>
                    <div class="isStoreAdd">台北市大安區復興路999段99號1巷</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="storeContent">
            <div class="storeName">
              <div class="title">取貨店名</div>
              <div class="content">
                <div class="name">復興</div>
                <div class="addStore">
                  <img src="../assets/icons/svg/icon_star.svg" alt="">儲存至常用門市
                </div>
              </div>
            </div>
            <div class="storeAdd">
              <div class="title">取貨地址</div>
              <div class="content">台北市大安區復興路999段99號1巷</div>
            </div>
          </div>
        </div>
        <div class="userInfo">
          <div class="userNav">填寫訂購人資訊</div>
          <div class="userContent">
            <div class="userName">
              <label for="userName" class="title">姓名</label>
              <input id="userName" class="inputName" type="text" placeholder="請填寫真實姓名" v-model.trim="userName.text">
            </div>
            <div class="userPhone">
              <label for="userPhone" class="title">手機</label>
              <input id="userPhone"  type="text">
              <input id="phoneNum" type="text" v-model.trim="userPhone.text">
            </div>
            <div class="userAdd">
              <label for="userAdd" class="title">地址</label>
              <input id="userAddNum" type="text" placeholder="郵遞區號">
              <input id="userAdd" type="text" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-model.trim="userAdd.text">
            </div>
            <div class="userEmail">
              <label for="userEmail" class="title">Email</label>
              <input id="userEmail" v-model.trim="userEmail.text" type="text">
            </div>
          </div>
        </div>
        <div class="recipInfo">
          <div class="recipNav">填寫收件人資訊</div>
          <div class="recipContent">
            <div class="checkSameUser" @click="isSameCheck"><img  :src="require(`../assets/icons/svg/${checkSameUser?'icon_confirm':'icon_oncheck'}.svg`)" alt=""> 同訂購人資料</div>
            <div class="recipName">
              <label for="recipName" class="title">姓名</label>
              <input id="recipName" type="text" placeholder="請填寫真實姓名" v-model.trim="recipName.text">
            </div>
            <div class="recipPhone">
              <label for="recipPhone" class="title">手機</label>
              <input id="recipPhone"  type="text">
              <input id="recipPhoneNum" type="text" v-model.trim="recipPhone.text">
            </div>
            <div class="recipAdd">
              <label for="recipAdd" class="title">地址</label>
              <input id="recipAddNum" type="text" placeholder="郵遞區號">
              <input id="recipAdd" type="text" placeholder="例：新北市信義區復興路999段99號1巷8樓" v-model.trim="recipAdd.text">
            </div>
            <div class="recipEmail">
              <label for="recipEmail" class="title">Email</label>
              <input id="recipEmail" type="text" placeholder="寄送通知會發送至此email" v-model.trim="recipEmail.text">
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
          <div v-if="!NotifyValidate" class="noticeCheck" @click="checkNotify=!checkNotify">
            <img :src="require(`../assets/icons/svg/${checkNotify?'icon_confirm':'icon_oncheck'}.svg`)" alt="">確認，我已暸解</div>
          <div v-else class="noticeCheck" @click="checkNotify=!checkNotify">
            <img :src="require(`../assets/icons/svg/${checkNotify?'icon_confirm':'icon_error'}.svg`)" alt="">確認，我已暸解<span class="dobuleCheck" v-if="!checkNotify">請確認</span></div>
        </div>
        <div class="stepRouter">
          <div class="steps">
            <div class="step perStep">上一步</div>
            <div class="step nextStep" @click="goCheck">下一步</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentStep from '@/components/PaymentStep.vue'

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
.selectStore{
  img{
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }
  .storeNav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .selectOption,.choiceStore,.favStore{
    display: flex;
    align-items: center;
  }
  .selectOption{
    position: relative;
  }
  .choiceStore{
    cursor: pointer;
  }
  .favStore{
    cursor: pointer;
    color: $main;
    &:hover{
      .isFavStore{
        opacity: 1;
      }
    }
  }
  .isFavStore{
    opacity: 0;
    position: absolute;
    width: 220px;
    text-align: left;
    bottom: -156px;
    left: 50%;
    background-color: $white;
    padding: 4px 8px;
    border: 1px solid $lightGrayBorder;
    .isStore{
      padding: 4px;
      &:hover{
        background-color: $mediumBg;
      }
    }
    .isStoreName{
      font-size: 15px;
      color: $mediumBlackText;
    }
    .isStoreAdd{
      font-size: 12px;
      color: $lightBlackText;
    }
  }
  .storeContent{
    background-color: #F5F7FA;
    padding: 20px 32px;
    .storeName{
      display: flex;
      padding-bottom: 10px  ;
      border-bottom: 1px solid black;
      .title{
        margin-right: 120px;
      }
      .content{
        display: flex;
        .name{
          margin-right: 8px;
        }
        .addStore{
          cursor: pointer;
          color: $main;
        }
      }
    }
    .storeAdd{
      display: flex;
      padding-top: 10px;
      .title{
        margin-right: 120px;
      }
    }
  }
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
