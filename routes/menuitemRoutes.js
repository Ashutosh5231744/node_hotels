
const express=require('express');
const router=express.Router();
const menuItem=require('./../model/menuitem');

router.post('/', async(req,res) =>{
  try{
    const data=req.body;
    const newmenuitem=new menuItem(data);
    const saveditem =await newmenuitem.save();
    res.status(201).json(saveditem);


  }catch(err){
     console.log(err);
    res.status(500).json({error:'internal server Error'});


  }
})

router.get('/',async(req,res)=>{
  try{
    const data =await menuItem.find();
    console.log('data fetched')
    res.status(200).json(data)



  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server Error'});
  }
})
// comment add 
module.exports=router;