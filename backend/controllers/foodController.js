import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add  food item

const addFood = async (req,res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        const { name, description, price, category } = req.body;

        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const priceNumber = Number(price);
        if (isNaN(priceNumber)) {
            return res.status(400).json({ success: false, message: "Price must be a number" });
        }

        const food = new foodModel({
            name,
            description,
            price: priceNumber,
            category,
            image: req.file.filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


const  listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});

    } catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


// remove food item
const removeFood = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }

}

export {addFood,listFood,removeFood}