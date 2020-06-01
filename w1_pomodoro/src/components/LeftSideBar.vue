<template>
  <div class="leftSide">
      <router-link to="/todo" class="d-flex justify-conten-center align-items-center my-3" href="#"  router-link="active">
        <i class="material-icons"  :class="this.$route.name=='todo'?'text-white':'text-dark-white'">list</i>
        <span class="ml-2" :class="this.$route.name=='todo'?'text-white':'text-dark-white'">TO-DO LIST </span>
      </router-link>
      <router-link to="/analytics" class="d-flex justify-conten-center align-items-center my-3" href="#"  router-link="active">
        <i class="material-icons" :class="this.$route.name=='analytics'?'text-white':'text-dark-white'">insert_chart</i>
        <span  class="ml-2" :class="this.$route.name=='analytics'?'text-white':'text-dark-white'">ANALYTICS</span>
      </router-link>
      <router-link to="/ringtones" class="d-flex justify-conten-center align-items-center my-3" href="#"  router-link="active">
        <i class="material-icons" :class="this.$route.name=='ringtones'?'text-white':'text-dark-white'" >library_music</i>            
        <span  class="ml-2" :class="this.$route.name=='ringtones'?'text-white':'text-dark-white'" >RINGTONES</span>
      </router-link>
    <div class="insideTodo">
      <InsideTime />
    </div>
  </div>
</template>
<script>

import InsideTime from '@/components/InsideTime.vue'
export default {
  components:{
    InsideTime
  },
}

</script>
<style lang="scss" scoped>
.leftSide{
  overflow: hidden;
  height: 100%;
}
.nav-item span{
  font-size: 36px;
}
.text-dark-white{
  color: #ffffff33 !important;
}
.insideTodo{
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>

