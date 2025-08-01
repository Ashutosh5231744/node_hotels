// db.js - Connect Node.js server to MongoDB using mongoose

const mongoose = require('mongoose');
require('dotenv').config();

// Replace with your MongoDB URL (best to store in .env file)
const mongoURL=process.env.MONGODB_URL
// const mongoURL =process.env.MONGODB_URL_LOCA
// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection Events
const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('❌ Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ Disconnected from MongoDB');
});

db.on('reconnected', () => {
  console.log('🔄 Reconnected to MongoDB');
});

module.exports = db;
