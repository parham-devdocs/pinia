<template>
    <div class="task">
<h3>{{ task.title }}</h3>
<div class="btns">

    <button @click="remove(task.id)">delete</button>
<button @click="Fav(task.id)">Favorite</button>

</div>

    </div>


    
</template>

<script setup>
 import { useTaskStore } from '@/stores/TaskStore';
import { defineProps } from 'vue'
const taskStore=useTaskStore()
 const props=defineProps(['task'])
function remove(id) {
    taskStore.deleteTask(id)
    console.log(id);
}
function Fav(id) {
    taskStore.toggleFav(id)
}
</script>