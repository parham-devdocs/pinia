<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
const TaskStore=useTaskStore()
import { ref } from "vue";
const filter=ref('all')


</script>

<template>
  <main>
    <!-- heading -->
    <header>
  
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

  <h1>pinia tasks</h1>
</header>
<!-- filter -->
<nav>
  <button @click="filter ='all'">All tasks</button>
  <button @click="filter ='favs'">fav tasks</button>

</nav>
<!-- task list -->

<div class="task-list" v-if="filter === 'all'">
  <p>All tasks</p>
  <div v-for="task in TaskStore.tasks" :key="task.id">
    <TaskDetails :task="task"></TaskDetails>
  </div>
  <p>you have {{ TaskStore.totalCount }} tasks</p>

</div>





<div class="task-list" v-if="filter === 'favs'">
  <p>Fave tasks</p>
  <div v-for="task in TaskStore.fav" :key="task.id">
    <TaskDetails :task="task"></TaskDetails>
  </div>
  <p>you have {{ TaskStore.countFav }} tasks</p>

</div>
<div>
  
</div>
<div class="form">
  <TaskForm></TaskForm>
</div>

  </main>
  
</template>

<style scoped>
.form{
display: flex;
justify-content: center;
}
</style>
