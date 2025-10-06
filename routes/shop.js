const express = require("express")
const router = express.Router()
// const islogin = require("../middlewares/islogin")

// router.get("/",function(req,res){
//     let error = req.flash("error")
//     res.send(`${error} Error`)
// })

router.get("/",function(req,res){
    res.send("shop page is working successfully")
})

module.exports = router