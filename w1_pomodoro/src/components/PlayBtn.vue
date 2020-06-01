<template>
  <div class="clickbtn rounded-circle my-5 align-center"   :style="{'background':creatDegree}">
    <div v-if="nowTodo.rest" class="inside_circle rounded-circle " :class="nowTodo.status?'play':'pause'" >
      <div class="click"  :class="nowTodo.status?'pause':''" @click="restMode">
        <div  :class="nowTodo.status?'pauseBtn':'playBtn'"></div>
      </div>
      <div class="dot"></div>
    </div>
    <div v-else class="inside_circle rounded-circle" :class="nowTodo.status?'pause':'play'">
      <div class="click" :class="nowTodo.status?'pause':''" @click="checkMode">
        <div :class="nowTodo.status?'pauseBtn':'playBtn'"></div>
      </div>
      <div class="dot"></div>
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
  computed:{
    creatDegree(){
      let vm =this;
      let d = vm.nowTodo.degree
      if ( d <= 180 ) {
        d = 90 + d;
        return 'linear-gradient(90deg, #ecf0f1 50%, transparent 50%), linear-gradient('+ d +'deg, #00A7FF 50%, #ecf0f1 50%)' ;
      } else {
        d = d - 90;
        return 'linear-gradient(-90deg, #00A7FF 50%, transparent 50%), linear-gradient('+ d +'deg, #ecf0f1 50%, #00A7FF 50%)' ;
      }
    },
    ...mapGetters(['nowTodo','todoTasks'])
  },
  methods:{
    checkMode(){
      let vm = this;
      if(!vm.nowTodo){
        return
      }
        vm.nowTodo.status=!vm.nowTodo.status
        if(vm.nowTodo.status){
          let totalSec = Number(vm.nowTodo.workTime.split(':')[0]*60)+Number(vm.nowTodo.workTime.split(':')[1])
          let total = Number(vm.nowTodo.workTime.split(':')[0]*60)+Number(vm.nowTodo.workTime.split(':')[1])

          timeCount = setInterval(() => {
            totalSec=totalSec-1
            console.log(totalSec)
            vm.nowTodo.timeShow=`${parseInt(totalSec/60)<10?`0${parseInt(totalSec/60)}`:parseInt(totalSec/60)}:${totalSec%60<10?`0${totalSec}`:totalSec%60}`
            vm.nowTodo.degree=((total-totalSec)/total)*3.6*100
            if(totalSec==0){
              vm.nowTodo.status=!vm.nowTodo.status
              vm.nowTodo.complete=true
              vm.nowTodo.rest=true
              vm.nowTodo.workTime=vm.nowTodo.breakTime
              vm.nowTodo.degree=0
              vm.baseSec=30
              clearInterval(timeCount)
            }
          }, 1000);
        }else if(!vm.nowTodo.status){
          clearInterval(timeCount)
        }
    },
    restMode(){
      let vm = this;
        vm.nowTodo.status=!vm.nowTodo.status
        if(vm.nowTodo.status){
          let totalSec = Number(vm.nowTodo.workTime.split(':')[0]*60)+Number(vm.nowTodo.workTime.split(':')[1])

          timeCount = setInterval(() => {
            totalSec=totalSec-1
            console.log(totalSec)
            vm.nowTodo.workTime=`${parseInt(totalSec/60)<10?`0${parseInt(totalSec/60)}`:parseInt(totalSec/60)}:${totalSec%60<10?`0${totalSec}`:totalSec%60}`
            vm.nowTodo.degree=((vm.baseSec-totalSec)/vm.baseSec)*3.6*100
            if(totalSec==0){
              let target = vm.todoTasks.filter(item => {
                return item.complete==false
              });
              vm.$store.dispatch('clickNowTodo',target[0])
              clearInterval(timeCount)
            }
          }, 1000);
        }else if(!vm.nowTodo.status){
          clearInterval(timeCount)
        }    
        }
  }
}
</script>
<style lang="scss" scoped>
.clickbtn{
  position: relative;
  width: 354px;
  height: 354px;
  border: 4px solid #00A7FF;
}
.inside_circle{
  width: 334px;
  height: 334px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &.play{
    background-color: #00A7FF;
    .dot{
      background-color: #fff;
    }
  }
  &.pause{
    .dot{
      background-color: #00A7FF;
    }
    background: #fff;
  }
  .dot{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 60%;
    right: 34%;
    transform: translate(-50%,-50%);
  }
}
.click{
  width: 58px;
  height: 58px;
  border-radius: 50%;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  cursor: pointer;
  &.pause{
    background-color: #00A7FF;
  }
  .playBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 16.8px;
    border-style: solid;
    border-width: 16.8px 0 16.8px 24.3px;
    border-color: transparent transparent transparent #00A7FF;
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
</style>
