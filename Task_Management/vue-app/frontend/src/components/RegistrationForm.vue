<template>
  <div>
    <h2>Registration Form</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
        };

        // Send the registration request to the backend API
        await axios.post('/api/auth/register', userData);

        // Clear the form fields
        this.username = '';
        this.email = '';
        this.password = '';

        // Show a success message or redirect to the login page
        alert('Registration successful');
      } catch (error) {
        // Handle the error
        console.error(error);
        alert('Registration failed');
      }
    },
  },
};
</script>
