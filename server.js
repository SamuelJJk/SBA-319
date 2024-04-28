const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;
//Routes
const playerRoute = require("./routes/playersRoute")
// const teamRoute = require("./routes/teamRoute")
// const OrgRoute = require("./routes/OrgRoute")



//middleware
app.use(express.urlencoded())
app.use("/api/player",playerRoute)
// app.use("/api/team", teamRoute )
// app.use("/api/org", OrgRoute)


app.get("/",(req,res)=>{
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})