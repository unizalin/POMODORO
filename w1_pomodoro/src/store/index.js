import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    nowTodo:'',
    todoTasks:
    [
      {id:'1',text:'the First thing to do today',complete:false,focus:false,timeStamp:'1:00',status:false,rest:false,degree:0,workTime:'20:00',breakTime:'05:00',timeShow:''},
      {id:'2',text:'the Second thing to do today',complete:false,focus:false,timeStamp:'20:00',status:false,rest:false,degree:0,workTime:'20:00',breakTime:'05:00',timeShow:''},
      {id:'3',text:'the Third thing to do today',complete:false,focus:false,timeStamp:'15:00',status:false,rest:false,degree:0,workTime:'20:00',breakTime:'05:00',timeShow:''}
    ],
    config:{
      basetime:'',
      
    },
  },
  mutations: {
    TODOTASKS(state,payload){
      state.todoTasks =payload
    },
    NOWTODO(state,payload){
      state.nowTodo=payload
    },
  },
  actions: {
    clickNowTodo(context,payload){
      console.log('clickNowTodo',payload)
      context.commit('NOWTODO',payload)
    },
   
  },
  getters:{
    todoTasks(state){
      return state.todoTasks
    },
    nowTodo(state){
      return state.nowTodo
    }
  },
  modules: {
  }
});
