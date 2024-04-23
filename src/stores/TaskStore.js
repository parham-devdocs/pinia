import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks:[

            {id:1 , title:'buy some milk',isFav:false},
            {id:2 , title:'play gloomhaven',isFav:true}
    
    
        ]
    }
  

),
getters: {
    fav(){
      return this.tasks.filter(t=>t.isFav)
    },
    countFav(){
        return this.tasks.reduce((p,c)=>{
            return c.isFav ? p+1 :p
        },0)
    },
    totalCount:(state)=>{
        return state.tasks.length
    }
  },
actions:{
    addTask(task){
this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks=  this.tasks.filter(t=>{
        return t.id !== id
      })
    },
    toggleFav(id){
    
this.tasks.forEach(t=>{
    if (t.id == id) {
    
        t.isFav = !t.isFav
console.log(t.isFav);
    }
})
    }
}
  })