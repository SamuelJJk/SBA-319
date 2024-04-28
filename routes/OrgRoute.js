const express = require("express");
const router = express.Router();
const Org = require("../models/organization");

//Read
router.get("/",(req,res)=>{
    res.json()
})
router.get("/:id",(req,res)=>{
    id = req.params.id
    const org = Org.findByID(id)
    res.json(Org)
})
//Create *
router.post("/", async(req,res)=>{
    const name = req.body.name;
    const location = req.body.location;
    const organization = req.body.organization;

    console.log(req.body)
    const org = Org.create({
        name: name,
        location: location,
        organization:organization,

    })
    
    res.json(Org)
})
//update
router.put("/:id",(req,res)=>{
    id = req.params.id
    const org = Org.findByID(id)
    res.json(Org)
})

//delete
router.delete("/",(req,res)=>{
    res.send(Org)
})

module.exports = router;