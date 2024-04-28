const express = require("express");
const router = express.Router();
const Team = require("../models/teams");

//Read
router.get("/",(req,res)=>{
    res.json()
})
router.get("/:id",(req,res)=>{
    id = req.params.id
    const team = Team.findByID(id)
    res.json(team)
})
//Create *
router.post("/", async(req,res)=>{
    const name = req.body.name;
    const location = req.body.location;
    const organization = req.body.organization;

    console.log(req.body)
    const team = Team.create({
        name: name,
        location: location,
        organization:organization,

    })
    
    res.json(Team)
})
//update
router.put("/:id",(req,res)=>{
    id = req.params.id
    const team = Team.findByID(id)
    res.json(Team)
})

//delete
router.delete("/",(req,res)=>{
    res.send(Team)
})

module.exports = router;