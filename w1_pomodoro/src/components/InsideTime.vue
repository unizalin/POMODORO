<template>
  <div class="inside">
    <div class="playbtn bg-info" :style="{'background':creatDegree}">
      <div class="inside_circle rounded-circle" :class="nowTodo.status?'pause':'play'">
        <div class="click" :class="nowTodo.status?'pause':''"  >
          <div :class="nowTodo.status?'pauseBtn':'playBtn'"></div>
        </div>
      </div>
      <div class="inside_time">
        <div class="timer text-primary">{{nowTodo.workTime}}</div>
        <div class="title text-blue text-bold">{{nowTodo.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
let timeCount
export default {
  data(){
    return{
      baseSec: 60,
    }
  },
  methods:{
    checkMode(){
      console.log('test')
      let vm = this;
      if(!vm.nowTodo){
        return
      }
        vm.nowTodo.status=!vm.nowTodo.status
        if(vm.nowTodo.status){
          let totalSec = Number(vm.nowTodo.timeStamp.split(':')[0]*60)+Number(vm.nowTodo.timeStamp.split(':')[1])
          timeCount = setInterval(() => {
            totalSec=totalSec-1
            vm.nowTodo.timeStamp=`${parseInt(totalSec/60)}:${totalSec%60<10?`0${totalSec}`:totalSec%60}`
            vm.nowTodo.degree=((vm.baseSec-totalSec)/vm.baseSec)*3.6*100
            if(totalSec==0){
              vm.nowTodo.status=!vm.nowTodo.status
              vm.nowTodo.complete=true
              clearInterval(timeCount)
            }
          }, 1000);
        }else if(!vm.nowTodo.status){
          clearInterval(timeCount)
        }
    },
  },
  computed:{
    creatDegree(){
      let vm =this;
      if ( vm.degree <= 180 ) {
        vm.degree = 90 + vm.degree;
        return 'linear-gradient(90deg, #ecf0f1 50%, transparent 50%), linear-gradient('+ vm.degree +'deg, #00A7FF 50%, #ecf0f1 50%)' ;
      } else {
        vm.degree = vm.degree - 90;
        return 'linear-gradient(-90deg, #00A7FF 50%, transparent 50%), linear-gradient('+ vm.degree +'deg, #ecf0f1 50%, #00A7FF 50%)' ;
      }
    },
    ...mapGetters(['nowTodo','todoTasks'])
  },
  mounted(){
    let vm =this;
    if(!vm.nowTodo){
      vm.$store.dispatch('clickNowTodo',vm.todoTasks[0])
    }
  }
}
</script>
<style lang="scss" scoped>
.inside {
  width: 100%;
  position: relative;
}

.playbtn {
  width: 100%;
  height: 136px;
  border-radius: 332px 332px 0 0;
}
.inside_circle {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 0;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  &.play{
    background-color: #00A7FF;
  }
   &.pause{
    background: #fff;
  }
}
.click {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00A7FF;
  cursor: pointer;
  &.pause{
      background-color: #00A7FF;
  }
  .playBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    border-style: solid;
    border-width: 20px 0 20px 30px;
    border-color: transparent transparent transparent #fff;
  }
  .pauseBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    &::before,&::after{
      content:'';
      display: block;
      height: 36px;
      width: 12px;
      background-color: #eee;
    }
    &::after{
      margin-left: 4px;
    }
  }
}
.inside_time {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 10%;
  .timer {
    font-size: 47px;
    font-weight: bold;
  }
  .title{
    font-size: 11px;
  }
}
</style>
