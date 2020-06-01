
<template>
  <div class="about px-5 pt-5 bg-secondary">
    <div class="row">
      <div class="col-5">
        <LeftSideBar />
      </div>
      <div class="col-6">
        <RingList />
      </div>
      <div class="col-1">
        <RightSideBar />
      </div>
    </div>
  </div>
</template>
<script>
import RingList from '@/components/ringList.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  components:{
    RingList,
    LeftSideBar,
    RightSideBar,
  }
}
</script>