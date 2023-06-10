<template>
  <div>
    <h2>Login Form</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      token: '', // Variable to store the token
    };
  },
  methods: {
    async login() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        // Send the login request to the backend API
        const response = await axios.post('/api/auth/login', userData);

        // Get the JWT token from the response
        this.token = response.data.token;

        // Clear the form fields
        this.email = '';
        this.password = '';

        // Show a success message or redirect to the dashboard
        alert('Login successful');
      } catch (error) {
        // Handle the error
        console.error(error);
        alert('Login failed');
      }
    },
  },
};
</script>
