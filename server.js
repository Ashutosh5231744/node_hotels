
const express = require('express');
const app = express();
const PORT = 5000;
const db=require('./db')
const bodyParser=require('body-parser');
app.use(bodyParser.json());


const person=require('./model/person')
const menuitem=require('./model/menuitem')

// // Middleware
app.use(express.json());

// Default Route
app.get('/', (req, res) => {
  res.send('MERN server running succesfully !');
});

// app.post('/person', async (req,res) =>{
//   try{
//         const data =req.body  // humne data liya jo body parser la ke diya
//         const newperson= new person(data); // jumne ek nya person ka model  bnaya  uskko object bnaya  aur data fill kr diya jo data humne mil rha hai bosy parse se 
//         const response=await newperson.save(); // us person ko save kiya aur wait kiya jab tak save na ho jaye 
//         console.log('data saves');
//         res.status(200).json(response);
//   } catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server Error'});

//   }
// })

// app.get('/person', async(req,res) =>{
//   try{
//     const data= await person.find();
//      console.log('data fetch');
//     res.status(200).json(data);

//   } catch(err){
//      console.log(err);
//     res.status(500).json({error:'internal server Error'});

//   }
// })


// app.post('/menuitem', async(req,res) =>{
//   try{
//     const data=req.body;
//     const newmenuitem=new menuitem(data);
//     const saveditem =await newmenuitem.save();
//     res.status(201).json(saveditem);


//   }catch(err){
//      console.log(err);
//     res.status(500).json({error:'internal server Error'});


//   }
// })

// app.get('/menuitem',async(req,res)=>{
//   try{
//     const data =await menuitem.find();
//     console.log('data fetched')
//     res.status(200).json(data)



//   }catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server Error'});
//   }
// })



// app.get('/person/:worktype', async(req,res) =>{
//  try{
//   const worktype=req.params.worktype;
//   if(worktype=='chef' ||'manager' || 'waiter'){
//     const response=await person.find({work:worktype});
//     console.log('response fetched');
//     res.status(200).json(response);
//   }else{
//     res.status(404).json({error:'invalid work type'});
//   }

//  }catch(err){
//   console.error(err);
//     res.status(500).json({ error: 'Internal server error' });

//  }

// })


// second router
// app.get('/chicken', (req, res) => {
//   res.send('sure sir i would love to server chicken!');
// });
// // third router
// app.get('/menu', (req, res) => {
//   res.send('the menu is front of you plese try to select the food item !');
// });
// // four router
// app.get('/idli', (req, res) => {
//   var customized_idli={
//     name:"ravaidli",
//     size:10,
//     is_chatnu:true,
//     picese:'total 30 pices are available'

//   }
//   res.send(customized_idli);
// });




const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuItem=require('./routes/menuitemRoutes');

app.use('/menuitem',menuItem);



// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
