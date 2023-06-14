import express from 'express'
import Info from '../Model/info'

//initialize the router

const router = express.Router();


//in the router is where you write your logics like creating, saving, deleting updating/editing data

// get all the info
router.get("/contact", async (req,res)=>{

    try{
        const info = await Info.find();

        res.status(200).send(info);

    }
    catch(error){
        console.log(error);
        res.status(500).send(error)
    }
    
})



//get info by id
// GET route to fetch a specific info by ID
router.get('/contact/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const info = await Info.findById(id);
      if (!info) {
        return res.status(404).json({ error: 'Info not found' });
      }
      res.status(200).json(info);
    } catch (error) {
      console.error('Error fetching info by ID:', error);
      res.status(500).json({ error: 'Failed to fetch info by ID' });
    }
  });
  


router.put('/contact/:id', async (req, res) => {
  const id = req.params.id;
  const { name, message } = req.body;
  try {
    const updatedCard = await Info.findByIdAndUpdate(id, { name, message }, { new: true });
    res.json(updatedCard);
  } catch (error) {
    console.error('Error updating card:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  

  
// Create a new card
router.post('/contact', async (req, res) => {
  const { name, message } = req.body;
  const card = new Info({ name, message });
  try {
    await card.save();
    res.json(card);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a card by ID
router.delete('/contact/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCard = await Info.findByIdAndDelete(id);
    res.json(deletedCard);
  } catch (error) {
    console.error('Error deleting card:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




export default router;