const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    console.log("")
})
app.post("/",(req,res)=>{
    console.log("")
})
app.delete("/",(req,res)=>{
    console.log("")
})
app.put("/",(req,res)=>{
    console.log("")
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})