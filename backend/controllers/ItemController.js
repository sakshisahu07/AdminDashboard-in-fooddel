
const ItemModel=require("../models/ItemModel")

const ItemSave=async(req,res)=>{
    const{name,description,price,image}=req.body;

    const Item=await ItemModel.create({
        name:name,
        description:description,
        price:price,
        image:image
    })
    res.send(Item)
}
module.exports={
    ItemSave
}