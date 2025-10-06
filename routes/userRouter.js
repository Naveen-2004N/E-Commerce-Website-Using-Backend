const express = require("express")
const router = express.Router()
const {registerUser,loginuser,logout} = require("../controllers/usercontrolle")
router.get("/", function (req, res) {
    res.send("hey its working")
})

router.post("/register",registerUser)
router.post("/login",loginuser)
router.get("/logout",logout)
module.exports = router