
const  express=require('express');
const router=express.Router();
const person=require('./../model/person')
router.post('/', async (req,res) =>{
  try{
        const data =req.body  // humne data liya jo body parser la ke diya
        const newperson= new person(data); // jumne ek nya person ka model  bnaya  uskko object bnaya  aur data fill kr diya jo data humne mil rha hai bosy parse se 
        const response=await newperson.save(); // us person ko save kiya aur wait kiya jab tak save na ho jaye 
        console.log('data saves');
        res.status(200).json(response);
  } catch(err){
    console.log(err);
    res.status(500).json({error:'internal server Error'});

  }
})

router.get('/', async(req,res) =>{
  try{
    const data= await person.find();
     console.log('data fetching succesfully');
    req.status(200).json(data);

  } catch(err){
     console.log(err);
    res.status(500).json({error:'internal server Error'});

  }
})

router.get('/:worktype', async(req,res) =>{
 try{
  const worktype=req.params.worktype;
  if(worktype=='chef' ||'manager' || 'waiter'){
    const response=await person.find({work:worktype});
    console.log('response fetched');
    res.status(200).json(response);
  }else{
    res.status(404).json({error:'invalid work type'});
  }

 }catch(err){
  console.error(err);
    res.status(500).json({ error: 'Internal server error' });

 }

})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id; // extract id from URL
    const updatedPersonData = req.body; // update data for person
    const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, // return updated document
      runValidators: true, // run mongoose validation
    });

    if (!response) {
      return res.status(404).json({ error: 'person not found' });
    }

    console.log("data updated");
    res.status(200).json({ message: 'data updated successfully' }); // ✅ FIXED LINE

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server Error' });
  }
});


router.delete('/:id',async(req,res)=>{
  try{
        const personId = req.params.id; // extract id from URL
        const response=await person.findByIdAndDelete(personId);

        if (!response) {
      return req.status(404).json({ error: 'person not found' });
    }


  }catch(err){
     console.log(err);
    res.status(500).json({ error: 'person deleted succesfully ' });

  }

})
module.exports=router; 
