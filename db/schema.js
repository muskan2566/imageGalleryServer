const mongoose = require("mongoose");
const imgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
});

let imgData = mongoose.model("images",imgSchema);

module.exports=imgData;