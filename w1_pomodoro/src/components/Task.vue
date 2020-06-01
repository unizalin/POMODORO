<template>
  <div>
    <TodoInput></TodoInput>
    <div class="nowTodo" v-if="nowTodo">
       <div class="todoInfo d-flex align-items-center">
            <i class="far fa-2x" :class="nowTodo.complete?'fa-check-circle':'fa-circle'" ></i>
            <div class="ml-2" :class="{'completed':nowTodo.complete}">{{nowTodo.text}}</div>
        </div>
        <div  class="todoTime ml-2 display-1 text-primary text-left font-weight-bold">{{nowTodo.workTime}}</div>
    </div>
    <ul class="timer">
      <li v-for="(todo,idx) in filterTodos" :key="idx" >
        <div class="todoInfo d-flex align-items-center" @click="clickNowTodo(todo)">
            <i class="far" :class="todo.complete?'fa-check-circle':'fa-circle'" ></i>
            <div class="ml-2" :class="{'completed':todo.complete}">{{todo.text}}</div>
        </div>
        <div  v-if="todo.focus" class="todoTime ml-2 display-1 text-primary text-left font-weight-bold">{{todo.workTime}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import TodoInput from "./TodoInput.vue";
import { mapGetters ,mapActions } from 'vuex';

export default {
  components:{
    TodoInput,
  },data(){
    return{
      testTodo:'',
    }
  },
  computed:{
    filterTodos(){
      let newTodos=[];
      let vm = this;
      this.todoTasks.forEach((item)=>{
        if(!item.complete && vm.nowTodo.id!=item.id){
          newTodos.push(item)
        }
      })
      return newTodos
    },
    ...mapGetters(['todoTasks','nowTodo'])
  },
  methods:{
    clickComplete(idx,e){
      console.log('todo',idx,e)
      console.log(this.todo)
      this.todoTasks[idx].complete=!e
    },
    ...mapActions(['clickNowTodo'])
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
.completed {
  text-decoration: line-through;
}
</style>
