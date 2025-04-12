const express = require("express");
const router = express.Router();

const Room = require("../models/room.js");

router.get("/getallrooms",async (req,res)=>{
    try{
        const rooms = await Room.find({});
        res.send(rooms)

    }
    catch(error){
        return res.status(400).json({message: error})

    }

});

router.post("/getroombyid", async (req, res) => {
    
    try {
        
      const { roomid } = req.body; 
      const room = await Room.findOne({ _id: roomid });
      res.send(room);
    } catch (error) {
      console.error("Error fetching room by ID:", error);
      return res.status(400).json({ message: error.message });
    }
  });
  
  
  
module.exports = router;

