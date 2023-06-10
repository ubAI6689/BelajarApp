<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <registration-form></registration-form>
  <login-form></login-form>
  <TaskInput @task-added="addTask"></TaskInput>
  <task-list :tasks="tasks" @task-deleted="deleteTask"></task-list>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    RegistrationForm,
    LoginForm,
    TaskInput,
    TaskList,
  },
  data() {
    return {
      tasks: [] // Stores the list of tasks
    };
  },
  methods: {
    addTask(taskName) {
      this.tasks.push(taskName); // Add the task to the tasks array
    },
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
