


const express=require("express")
const route=express.Router()

const AdminContro=require("../controllers/AdminController")
route.post("/usercheck",AdminContro.admindataCheck)

module.exports=route;