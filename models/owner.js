const mongoose = require("mongoose")
const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: [],
    },
    picture: String,
    gestin:String,
}, { timestamps: true })
const ownerModel = mongoose.model("owner", ownerSchema)
module.exports = ownerModel