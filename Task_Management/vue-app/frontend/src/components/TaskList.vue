<template>
    <div>
      <ul>
        <li v-for="task in tasks" :key="task">
          {{ task }}
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task)">Delete</button>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    tasks: Array
  },
  methods: {
    deleteTask(task) {
      this.$emit('task-deleted', task); // Emit a custom event with the task as payload
    }
  }
};
</script>

