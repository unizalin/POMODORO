<template>
  <div class="about   px-5 pt-5 bg-secondary">
    <div class="row">
      <div class="col-5">
        <LeftSideBar/>
      </div>
      <div class="col-6">
        <TodoList/>
      </div>
      <div class="col-1">
        <RightSideBar/>
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  components:{
    TodoList,
    LeftSideBar,
    RightSideBar,
  }
}
</script>
