<template>
  <div class="monthCalendar xc-border xc-round-s border-primary">
    <div class="close xc-round-s xc-bg-gray3" @click="closeCalendar()"></div>
    <div class="card-body">
      <div class="calendarNav d-flex justify-content-between align-items-center">
        <div class="preMonth d-flex" @click="adjustMonth(-1)">
          <div class="preTri"></div>
          <span class="h6 mb-0 ml-2 text-primary">{{calendar.month==0 ? 1:calendar.month}} 月</span>
        </div>
        <div class="nowMonth py-2">
          <span class="xc-text-md-h3 h5 xc-text-bold">{{calendar.year}} 年 {{calendar.month +1}} 月</span>
        </div>
        <div class="nextMonth d-flex" @click="adjustMonth(1)">
          <span class="h6 mb-0 mr-2 text-primary">{{calendar.month >10?1: calendar.month+2}} 月</span>
          <div class="nextTri"></div>
        </div>
      </div>
      <div class="calendar">
        <div class="weekDay">
          <div>日</div>
          <div>一</div>
          <div>二</div>
          <div>三</div>
          <div>四</div>
          <div>五</div>
          <div>六</div>
        </div>
        <div class="week" v-for="i in 6" :key="i">
          <div
            class="day"
            v-for="(j,idx) in 7"
            :key="idx"
            :class="{pastDay:calendarMonth[(i-1)*7+j-1].month === today.month && calendarMonth[(i-1)*7+j-1].date < today.date || calendar.month < today.month || calendar.year < today.year
}"
          >
            <div class="date" @click.prevent="selectDate($event,calendarMonth[(i-1)*7+j-1])">
              <div
                class="datePick"
                :class="{
              today:calendarMonth[(i-1)*7+j-1].year === today.year && calendarMonth[(i-1)*7+j-1].month === today.month && calendarMonth[(i-1)*7+j-1].date === today.date
              ,other:calendarMonth[(i-1)*7+j-1].month !== calendar.month
              ,pastDay:calendarMonth[(i-1)*7+j-1].month === today.month && calendarMonth[(i-1)*7+j-1].date < today.date || calendar.month < today.month || calendar.year < today.year
              ,weekend:j==7||j==1
              ,selected: visibility==`${calendarMonth[(i-1)*7+j-1].year}${calendarMonth[(i-1)*7+j-1].month}${calendarMonth[(i-1)*7+j-1].date}`
              }"
                @click="visibility = `${calendarMonth[(i-1)*7+j-1].year}${calendarMonth[(i-1)*7+j-1].month}${calendarMonth[(i-1)*7+j-1].date}`"
              >
                <div class="solar">{{calendarMonth[(i-1)*7+j-1].date}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visibility: '',
      chiday:['日', '一', '二', '三', '四', '五', '六'],
      remainDay:'14',
      today:{
        year:'',
        month:'',
        date: '',
        day:''
      },
      calendar:{
        year:'',
        month:'',
        date: '',
        day:''
      },
    };
  },
  mounted(){
    setTimeout(() => {
      this.setToday()
    }, 500);
  },
  methods:{
    setToday(){
      this.visibility=''
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth() // 0~11
      this.today.date = this.calendar.date = date.getDate()
      this.today.day = this.calendar.day = date.getDay()
      this.closeCalendar()
    },
    adjustYear(fix){
      this.calendar.year += fix
    },
    adjustMonth(fix){
      // this.calendar.month += fix 範圍
      let month = this.calendar.month + fix
      if(month > 11){
        this.adjustYear(1)
        this.calendar.month = 0
      }else if(month < 0){
        this.adjustYear(-1)
        this.calendar.month = 11
      }else{
        this.calendar.month = month
      }
    },
    convertLunar (val) {
      return this.solar2lunar(val)
    },
    selectDate(e,date){
      this.closeCalendar()   
      this.calendar.year = date.year
      this.calendar.month = date.month // 0~11
      this.calendar.date = date.date 
      this.calendar.day = date.day 
      // alert(`你選到的日期為 ${date.year}${date.month+1}月 ${date.date}日 星期 ${date.day}`)
    },
    closeCalendar(){
      // this.setToday()
    }
  },
  computed:{
    calendarFirstDay(){ 
      let vm =this;
      const mDate = new Date(this.calendar.year,this.calendar.month,1)
      const date = new Date(this.calendar.year,this.calendar.month,1 - mDate.getDay())
      return {
        year:date.getFullYear(),
        month:date.getMonth(),
        date:date.getDate(),
        day:vm.chiday[date.getDay()],
      }
    },
    calendarMonth(){
      const data = []
      let date
      for(let i=0;i<42;i++){
        date = new Date(this.calendarFirstDay.year,this.calendarFirstDay.month,this.calendarFirstDay.date + i)
        data.push({
          year:date.getFullYear(),
          month:date.getMonth(),
          date:date.getDate(),
          day:date.getDay()
        })
      }
      return data
    },
    nextCalendarFirstDay(){ 
      let vm =this;
      const mDate = new Date(this.calendar.year,this.calendar.month+1,1)
      const date = new Date(this.calendar.year,this.calendar.month +1 ,1 - mDate.getDay())
      return {
        year:date.getFullYear(),
        month:date.getMonth(),
        date:date.getDate(),
        day:vm.chiday[date.getDay()],
      }
    },
    nextCalendarMonth(){
      const data = []
      let date
      for(let i=0;i<42;i++){
        date = new Date(this.nextcalendarFirstDay.year,this.nextcalendarFirstDay.month,this.nextcalendarFirstDay.date + i)
        data.push({
          year:date.getFullYear(),
          month:date.getMonth(),
          date:date.getDate(),
          day:date.getDay()
        })
      }
      return data
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$Primary: #ffe99d;
.monthCalendar {
  position: relative;
  // position: fixed;
  // top: 53%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // background-color: #fff;
  // box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  // display: none;
  // z-index: 20;
  // transition: opacity 0.5s;
}
.monthCalendar {
  width: 95%;
  z-index: 20;
}

.weekDay,
.week {
  text-align: center;
  display: flex;
}
.weekDay > div {
  flex: 1 1;
  line-height: 30px;
}
.day {
  flex: 1 1 0%;
  line-height: 50px;
  height: 50px;
}

.weekend {
  color: red;
}
.date {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.datePick {
  width: 100%;
  height: 50px;
  position: relative;
  .solar {
    width: 100%;
    position: absolute;
    transform: translate(-50%, -15%);
    top: 0;
    left: 50%;
  }
  .lunar {
    font-size: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 25%);
  }
}
.leapMonthDateOne {
  width: 42px;
  border-bottom: 1px solid #cc0000;
}
.lunarMonthDateOne {
  width: 36px;
  border-bottom: 1px solid #cc0000;
}
.today {
  width: 50px;
  background-color: #ffedcf;
  border-radius: 50%;
  position: relative;
}
.selected {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #853737;
}

.pastDay {
  position: relative;
  pointer-events: none;
  color: #bbb;
}

.other {
  color: #bbb;
  display: none;
}

/*  test*/
.preTri {
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 20.8px 12px 0;
  border-color: transparent $Primary transparent transparent;
}
.nextTri {
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20.8px;
  border-color: transparent transparent transparent $Primary;
}
.btn {
  cursor: pointer;
  padding: 4px 6px;
  border: 1px solid black;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 5px;
  &:hover {
    background-color: #999;
    color: #fff;
  }
}

// rwd

@media (min-width: 320px) {
  .card-bottom {
    font-size: 15px;
    .userRange {
      font-size: 10px;
    }
  }
}
@media (min-width: 375px) {
  .card-bottom {
    .btn {
      padding: 12px 10px;
      font-size: 16.3px;
      line-height: 15px;
    }
    .userRange {
      font-size: 1rem;
    }
  }
}
@media (min-width: 765px) {
  .monthCalendar {
    width: 700px;
    z-index: 4;
  }
}
</style>