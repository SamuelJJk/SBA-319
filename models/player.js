const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    name:String,
    jerseyNo:Number,
    team:String,
});

const Player = mongoose.model("Player",playerSchema);

module.exports = Player;