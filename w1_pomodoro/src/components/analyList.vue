<template>
  <div>
    <div class="focusTime">
      <div class="analyBar d-flex justify-content-between mt-4 mb-2">
        <span class="h4 text-white m-0">FOCUS TIME</span>
      </div>
      <div class="content d-flex justify-content-between">
        <div class="todaySum">
          <div class="title text-white text-left">TODAY</div>
          <div class="content d-flex align-items-end mt-2">
            <span class="sum text-primary h1 mb-0">20</span><span class="text-dark">/TOMATA</span>
          </div>
        </div>
        <div class="weekSum">
          <div class="title text-white text-left">WEEK</div>
          <div class="content d-flex align-items-end mt-2">
            <span class="sum text-primary h1 mb-0">108</span><span class="text-dark">/TOMATA</span>
          </div>
        </div>
      </div>
    </div>
    <div class="analyBar d-flex justify-content-between mt-4 mb-2 align-items-end">
      <span class="h4 text-white m-0">CHART</span>
      <span class="weekTime text-white small">{{getWeekDay[0]}}-{{getWeekDay[6]}} </span>
    </div>
    <div class="content">
      <!-- y+h = 160 -->
      <svg id="pic4" viewbox="0 0 300 300" width="100%" height="200">
        <rect x="12%" y="120" width="20"  fill="#f3f3f3" height="40"></rect>
        <rect x="24%" y="130" width="20"  fill="#f3f3f3" height="30"></rect>
        <rect x="36%" y="150" width="20"  fill="#f3f3f3" height="10"></rect>
        <rect x="48%" y="80" width="20"  fill="#f3f3f3" height="80"></rect>
        <rect x="60%" y="60" width="20"  fill="#f3f3f3" height="100"></rect>
        <rect x="72%" y="40" width="20"  fill="#f3f3f3" height="120"></rect>
        <rect x="84%" y="10" width="20"  fill="#f3f3f3" height="150"></rect>
        <line x1="6%" y1="160" x2="100%" y2="160" style="stroke:#e3e3e3;stroke-width:3px; "/>
        <line x1="6%" y1="0" x2="6%" y2="160" style="stroke:#e3e3e3;stroke-width:3px; "/>
        <!-- 日期 y軸-->
        <text :x="`${12*(idx+1)}%`" y="180" fill="#f3f3f3" v-for="(day,idx) in getWeekDay" :key="idx">{{day.slice(5)}}</text>
        <!-- 數量 x軸-->
        <text x="0" y="72%" fill="#f3f3f3">04</text>
        <text x="0" y="60%" fill="#f3f3f3">08</text>
        <text x="0" y="48%" fill="#f3f3f3">12</text>
        <text x="0" y="36%" fill="#f3f3f3">16</text>
        <text x="0" y="24%" fill="#f3f3f3">20</text>
        <text x="0" y="12%" fill="#f3f3f3">24</text>

      </svg>
    </div>
  </div>
</template>

<script>


export default {
  name:'analyList',
  data(){
    return{
      todos:[
        {id:'1',text:'the First thing to do today',complete:false},
        {id:'2',text:'the Second thing to do today',complete:false},
        {id:'3',text:'the Third thing to do today',complete:false}
      ],
      todoOpen:false,
      doneOpen:false
    }
  },
  methods:{
   
  },
  computed:{
    today(){
        let today  = new Date().toLocaleString().split(" ")[0]
      return today
    },
    getWeekDay(){
      let today  = new Date().toISOString().slice(0,10)
      let arr = today.split("-")
      let dayOfWeek = new Date().getDay()
      var dateOfWeekInt = parseInt(dayOfWeek,10);//轉換為整型
      // var aa = 6-dateOfWeekInt;//當前於週末相差的天數
      var temp2 = parseInt(arr[2],10);//按10進位制轉換,以免遇到08和09的時候轉換成0
      var sunDay = temp2-dateOfWeekInt
      let week = new Array()
      for(var i =0 ;i<7;i++){
        week.push(new Date(arr[0],arr[1]-1,sunDay+i).toLocaleString().split(" ")[0])
      }
      return week;
    }
  }
}
</script>
<style lang="scss" scoped>
.analyBar {
  padding: 8px;
  background: #335A83 0% 0% no-repeat padding-box;
}

</style>
