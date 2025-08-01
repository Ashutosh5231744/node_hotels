// db.js - Connect Node.js server to MongoDB using mongoose

const mongoose = require('mongoose');

// Replace with your MongoDB URL (best to store in .env file)
const mongoURL = "mongodb+srv://ashutosh91619:ashu123@cluster0.dw3k4jx.mongodb.net/hotels?retryWrites=true&w=majority";

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
