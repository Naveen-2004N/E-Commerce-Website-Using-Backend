const jwt = require("jsonwebtoken")
const generateToken = function(user){
    return jwt.sign({email:user.email,id:user._id},process.env.KEY_VAL)
}
module.exports = {
    generateToken
}