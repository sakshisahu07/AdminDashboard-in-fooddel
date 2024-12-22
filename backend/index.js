
const express=require("express")
const app=express();
const AdminRoute=require("./routes/AdminRoute")
const ItemRoute=require("./routes/ItemRoute")
const mongoose=require("mongoose")
const bodyparser=require('body-parser')
const cors=require("cors")
require("dotenv").config()
app.use(cors())
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/adminuser",AdminRoute)
app.use("/item",ItemRoute)
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB successfully connected!!")

})

app.listen(8080,(req,res)=>{
    console.log("Server Runs on this port!!")
})