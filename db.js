// This db.js file is esential for maintaing the connection from node js server to your mongodb server through the library using mongoose library 
 const mongoose=require('mongoose');
 const mongoURL="mongodb://localhost:27017/hotels"  // replace databse name to the hotel

 mongoose.connect(mongoURL ,{
  useNewUrlParser:true,
 useUnifiedTopology:true,


 })

 const db = mongoose.connection;
 db.on('connected',() =>{
  console.log('connected to mongodb server')
 })
  db.on('error',(err) =>{
  console.log('error to connected  to mongodb server')
 })
  db.on('disconnected',() =>{
  console.log('disconnected to mongodb server')
 })
  db.on('reconnected',() =>{
  console.log('reconnected to mongodb server')
 })

module.exports=db;