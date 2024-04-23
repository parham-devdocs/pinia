<template>
    <form @submit.prevent="handleSubmit">
        <input 
        type="text" 
        placeholder="i need to ..."
        v-model="newTask"
        >
        <button >Add</button>
        
    </form>
</template>
<script setup>
import {useTaskStore} from '../stores/TaskStore.js'
import { ref } from "vue";

        const taskStore=useTaskStore()
    const newTask=ref('')
   function handleSubmit() {
    if (newTask.value.length>0) {
        taskStore.addTask({
            title:newTask.value,
            isFav:false,
            id:Math.floor(Math.random()*1000000)
        })
    }
    newTask.value=''
   }
   
</script>
<style scoped>
input{
    width: 250px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: rgb(133, 137, 137);
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>