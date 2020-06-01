<template>
  <div>
    <div class="focusTime">
      <div class="analyBar d-flex justify-content-between mt-4 mb-2">
        <span class="h4 text-white m-0">WORK</span>
      </div>
      <div class="content row">
        <div class="col-4 text-white text-left " v-for="(item,idx) in ringList" :key="idx" @click="ringChose=item.text">
          <i class="far  mr-2" :class="item.text===ringChose?'fa-dot-circle':'fa-circle'"></i>{{item.text}}
        </div>
      </div>
    </div>
    <div class="analyBar d-flex justify-content-between mt-4 mb-2">
      <span class="h4 text-white m-0">BREAK</span>
    </div>
    <div class="content row">
        <div class="col-4 text-white text-left " v-for="(item,idx) in breakList" :key="idx"  @click="breakChose=item.text">
          <i class="far mr-2" :class="item.text===breakChose?'fa-dot-circle':'fa-circle'"></i>{{item.text}}
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name:'ringList',
  data(){
    return{
      ringList:[
        {id:'1',text:'NONE',complete:false},
        {id:'2',text:'DEFAULT',complete:false},
        {id:'3',text:'ALARM',complete:false},
        {id:'4',text:'ALART',complete:false},
        {id:'5',text:'BEEP',complete:false},
        {id:'6',text:'BELL',complete:false},
        {id:'7',text:'BIRD',complete:false},
        {id:'8',text:'BUGLE',complete:false},
        {id:'9',text:'DIGITAL',complete:false},
        {id:'10',text:'DROP',complete:false},
        {id:'11',text:'HORN',complete:false},
        {id:'12',text:'MUSIC',complete:false},
        {id:'13',text:'RING',complete:false},
        {id:'14',text:'WAENING',complete:false},
        {id:'15',text:'WHISTLI',complete:false}
      ],
      breakList:[
        {id:'1',text:'NONE',complete:false},
        {id:'2',text:'DEFAULT',complete:false},
        {id:'3',text:'ALARM',complete:false},
        {id:'4',text:'ALART',complete:false},
        {id:'5',text:'BEEP',complete:false},
        {id:'6',text:'BELL',complete:false},
        {id:'7',text:'BIRD',complete:false},
        {id:'8',text:'BUGLE',complete:false},
        {id:'9',text:'DIGITAL',complete:false},
        {id:'10',text:'DROP',complete:false},
        {id:'11',text:'HORN',complete:false},
        {id:'12',text:'MUSIC',complete:false},
        {id:'13',text:'RING',complete:false},
        {id:'14',text:'WAENING',complete:false},
        {id:'15',text:'WHISTLI',complete:false}
      ],
      ringChose:'NONE',
      breakChose:'NONE'
    }
  },
  methods:{
   
  },
  computed:{
  }
}
</script>
<style lang="scss" scoped>
.analyBar {
  padding: 8px;
  background: #335A83 0% 0% no-repeat padding-box;
}
</style>
