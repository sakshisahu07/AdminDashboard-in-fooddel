



const express=require("express")
const route=express.Router();
const ItemController=require("../controllers/ItemController")
route.post("/itemsave",ItemController.ItemSave)

module.exports=route