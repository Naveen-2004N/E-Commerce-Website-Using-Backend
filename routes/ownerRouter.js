const express = require("express")
const ownerModel = require("../models/owner")
const router = express.Router()

router.get("/", function (req, res) {
    res.send("hey its working")
})

if(process.env.NODE_ENV === "development"){
router.post("/create", async function (req, res) {
    let owners = await ownerModel.find()
    if (owners.length > 0) {
        return res.status(503).send("YOU Don't have permission to create a new owner.")
    }
    let {fullname,email,password} = req.body
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    })
    res.status(201).send(createdOwner)
})
}

module.exports = router