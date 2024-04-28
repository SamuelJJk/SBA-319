const express = require("express");
const router = express.Router();
const Player = require("../models/player");


//Read
router.get("/",(req,res)=>{
    res.json(Player)
})
router.get("/:id",(req,res)=>{
    id = req.params.id
    res.json(id)
})
//Create 
// router.post("/",(req,res)=>{
//     const newPlayer = {
//         name: req.body.name,
//         jersey: req.body.jersey,
//         team: req.body.team
//     }
//     if (!newPlayer.name || !newPlayer.jersey || !newPlayer.team){
//         return res.status(400).json({msg: "please enter all the keys" })
//     }
//     req.json(player)
// })
router.post("/", async(req,res)=>{
    const name = req.body.name;
    const jersey = req.body.jersey;
    const team = req.body.team;

    const player = await Player.create({
        name: name,
        jersey: jersey,
        team: team,
    })
    res.json({player:player})
})


// router.delete("/api/player",(req,res)=>{
//     res.send(player)
// })

module.exports = router;