// backend/server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
require('dotenv').config();

// Middleware
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
