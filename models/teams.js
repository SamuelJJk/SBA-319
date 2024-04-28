const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    name:String,
    location:String,
    organization:String,
});

const Team = mongoose.model("Team",teamSchema);

module.exports = Team;