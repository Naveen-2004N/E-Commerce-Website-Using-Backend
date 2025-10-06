const express = require("express")
const path = require("path")
const db = require("./config/mongoos-connection")
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productsRouter")
const ownerRouter = require("./routes/ownerRouter")
const shop = require("./routes/shop")
const expressSession = require("express-session")
const flash = require("connect-flash")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT | 3000
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(cookieParser())
app.use("/shop", shop)
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/owners", ownerRouter)
app.listen(PORT, () => console.log(`Server Started at PORT Numbet ${PORT}`))
