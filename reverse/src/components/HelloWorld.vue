<template>
  <section class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="banner">
            <div class="room-title">
              <h1>HexHotel</h1>
            </div>
            <div class="nav-block">
              <div class="dropdown w-100 d-flex justify-content-between align-items-center border p-4">
                <div class="dropTitle d-flex align-items-center">
                  <span class="material-icons">date_range</span>
                  <span class="ml-4 text-uppercase">CHECK-IN</span>
                </div>
                <span class="material-icons">arrow_drop_down</span>
              </div>
              <div class="dropdown w-100 d-flex justify-content-between align-items-center border p-4">
                <div class="dropTitle d-flex align-items-center">
                  <span class="material-icons">date_range</span>
                  <span class="ml-4 text-uppercase">check-out</span>
                </div>
                <span class="material-icons">arrow_drop_down</span>
              </div>
              <div class="dropdown room" @click="isShowRoom=!isShowRoom">
                <div class="roomMenu w-100 d-flex justify-content-between align-items-center border p-4">
                  <div class="dropTitle d-flex align-items-center">
                  <span class="material-icons">hotel</span>
                  <span class="ml-4 text-uppercase">{{roomChoice}}</span>
                </div>
                <span class="material-icons">arrow_drop_down</span>
              </div>
              <div class="roomContent" v-if="isShowRoom">
                <a class="dropdown-item p-4 border text-left" href="#" v-for="(item,idx) in roomList" :key="idx" @click="roomChoice=item.title">{{item.title}}</a>
              </div>
              </div>
              <div class="dropdown w-100  border p-4 text-center bg-primary text-white text-uppercase">REVERSE NOW</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data(){
      return{
        isShowRoom: false,
        roomChoice: 'ROOM',
        roomList:[
          {title: 'Single Room'},
          {title: 'Deluxe Single Room'},
          {title: 'Double Room'},
          {title: 'Deluxe Double Room'},
          {title: 'Twin Room'},
          {title: 'Deluxe Twin Room'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header .room-title {
    width: 920px;
    height: 352px;
    background: url('https://images.unsplash.com/photo-1523594572281-3c9a566b6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80') top no-repeat;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 57px;
      height: 219px;
      background-color: #fff;
    }

    h1 {
      position: relative;
      font-size: 48px;
      font-style: italic;
      font-weight: 700;
      writing-mode: vertical-lr;
      color: #2d3643;
    }
  }

  .nav-block {
    width: 350px;
    position: absolute;
    top: 12%;
    right: 0;
    .dropdown{
      cursor: pointer;
    }
    .room{
      .roomContent{
        position: absolute;
        z-index: 3;
        background-color: #fff;
        width: 100%;
      }
    }
  }
</style>