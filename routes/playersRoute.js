const express = require("express");
const router = express.Router();
const Player = require("../models/player");


//Read
router.get("/",(req,res)=>{
    res.json()
})
router.get("/:id",(req,res)=>{
    id = req.params.id
    const player = Player.findByID(id)
    res.json(player)
})
//Create *
router.post("/", async(req,res)=>{
    const name = req.body.name;
    const jersey = req.body.jersey;
    const team = req.body.team;
    console.log(req.body)
    const player = Player.create({
        name: name,
        jersey: jersey,
        team: team,
    })
    
    res.json(player)
})
//update
router.put("/:id",(req,res)=>{
    id = req.params.id
    const player = Player.findByID(id)
    res.json(player)
})

//delete
router.delete("/",(req,res)=>{
    res.send(Player)
})

module.exports = router;