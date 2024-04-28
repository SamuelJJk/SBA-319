const mongoose = require('mongoose')

const organizationSchema = mongoose.Schema({
    name:String,
});

const Organization = mongoose.model("Organization",organizationSchema);

module.exports = Organization;