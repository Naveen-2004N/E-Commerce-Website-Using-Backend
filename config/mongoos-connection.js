const mongoose = require("mongoose")
const config = require("config")
const debug = require("debug")("development:mongoose")
mongoose
    .connect(`${config.get("MONGODB_URL")}/scatch`)
    .then(()=>{
        debug("Server Connected");
    })
    .catch((err)=>{
        debug(err);
    })
module.exports = mongoose.connection