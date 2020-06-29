<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card-body text-left">
          <div class="roomName font-weight-bold mb-3">description</div>
          <div class="roomInfo mb-3">1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²</div>
          <div class="roomContent mb-3">Deluxe Single Room is only reserved for one guest. There is a bedroom with a small double size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</div>
          <div class="roomTime">
            <div class="checkIn">Check-in is from 3pm to 7pm </div>
            <div class="checkOut">Check-out is before 11am</div>
          </div>
        </div>
        <div class="card-body text-left">
          <div class="amenitTitle font-weight-bold">Amenities</div>
          <div class="row">
            <div class="icon d-flex align-items-center col-4 p-2" v-for="(item,idx) in amenitList" :key="idx"  :class="item.show?'':'text-mute'">
              <span class="material-icons"  >{{item.icon}}</span> 
              <span class="iconText ml-3"  >{{item.text}}</span>           
            </div>
          </div>
        </div>
        <div class="card-body text-left">
          <div class="amenitTitle font-weight-bold">Availability</div>
          <div class="d-flex">
            <calendar/>
            <calendar/>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <div class="priceBLock">
            <div class="priceTotal">$1,899 NTD / night</div>
            <div class="happy">holiday price - $2,000 NTD / night</div>
          </div>
          <div class="datePick mt-4">
            <div class="dropdown w-100 d-flex justify-content-between align-items-center border p-4">
              <div class="dropTitle d-flex align-items-center">
                <span class="material-icons">date_range</span>
                <span class="ml-4 text-uppercase">check-in</span>
              </div>
              <span>2019/8/7</span>
            </div>
            <div class="dropdown w-100 d-flex justify-content-between align-items-center border p-4">
              <div class="dropTitle d-flex align-items-center">
                <span class="material-icons">date_range</span>
                <span class="ml-4 text-uppercase">check-out</span>
              </div>
              <span>2019/8/7</span>
            </div>
            <div class="priceContent w-100  border p-4">
              <div class="priceTag border-bottom py-2">
                <div class="price mb-2 d-flex align-items-center justify-content-between">
                  <span>$1,899 × 2 night</span>
                  <span class="ml-4 text-uppercase">$3,798</span>
                </div>
                <div class="price mb-2 d-flex align-items-center justify-content-between">
                  <span>$1,899 × 2 night</span>
                  <span class="ml-4 text-uppercase">$6,000</span>
                </div>
                <div class="price mb-2 d-flex align-items-center justify-content-between">
                  <span>Service Fee</span>
                  <span class="ml-4 text-uppercase">$1,200</span>
                </div>
              </div>
              <div class="price mt-4 d-flex align-items-center justify-content-between">
                <span>total</span>
                <span class="ml-4 text-uppercase">$10,998</span>
              </div>
            </div>
            <div class="dropdown w-100  border p-4 text-center bg-primary text-white text-uppercase">REVERSE NOW</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import calendar from '@/components/Calendar'
export default {
  components:{
    calendar
  },
  data(){
    return{
      amenitList:[
        {
          icon: 'wifi',
          show: Math.random()<0.5?true:false,
          text: 'Wi-Fi'
        },
        {
          icon: 'tv',
          show: Math.random()<0.5?true:false,
          text: 'Television'
        },
        {
          icon: 'landscape',
          show: Math.random()<0.5?true:false,
          text: 'Great View'
        },
        {
          icon: 'restaurant',
          show: Math.random()<0.5?true:false,
          text: 'Breakfast'
        },
        {
          icon: 'ac_unit',
          show: Math.random()<0.5?true:false,
          text: 'Air Conditioner'
        },
        {
          icon: 'smoke_free',
          show: Math.random()<0.5?true:false,
          text: 'Smoke Free'
        },
        {
          icon: 'local_bar',
          show: Math.random()<0.5?true:false,
          text: 'Mini Bar'
        },
        {
          icon: 'kitchen',
          show: Math.random()<0.5?true:false,
          text: 'Refrigerator'
        },
        {
          icon: 'child_care',
          show: Math.random()<0.5?true:false,
          text: 'Child-Friendly'
        },
        {
          icon: 'room_service',
          show: Math.random()<0.5?true:false,
          text: 'Room Service'
        },
        {
          icon: 'weekend',
          show: Math.random()<0.5?true:false,
          text: 'Sofa'
        },
        {
          icon: 'pets',
          show: Math.random<0.5?true:false,
          text: 'Pet-Friendly'
        },
      ]
    }
  }
}
</script>
