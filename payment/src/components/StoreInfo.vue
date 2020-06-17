<template>
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
</template>

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
</style>
