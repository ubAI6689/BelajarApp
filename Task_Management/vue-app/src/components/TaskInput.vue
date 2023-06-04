<template>
    <div>
      <input v-model="taskName" type="text" placeholder="Enter a task">
      <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: '' // Stores the current value of the task input field
    };
  },
  methods: {
    addTask() {
      if (this.taskName.trim() !== '') {
        this.$emit('task-added', this.taskName); // Emit a custom event to notify the parent component
        this.taskName = ''; // Clear the task input field
      }
    }
  }
};
</script>




  