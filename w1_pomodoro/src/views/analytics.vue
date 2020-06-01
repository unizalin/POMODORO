
<template>
  <div class="about container-fluid px-5 pt-5 bg-secondary">
    <div class="row">
      <div class="col-5">
        <LeftSideBar />
      </div>
      <div class="col-6">
        <AnalyList />
      </div>
      <div class="col-1">
        <RightSideBar />
      </div>
    </div>
  </div>
</template>
<script>
import AnalyList from '@/components/analyList.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  components:{
    AnalyList,
    LeftSideBar,
    RightSideBar,
  }
}
</script>