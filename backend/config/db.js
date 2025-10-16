import mongoose from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Hari:admin@hari.fumugac.mongodb.net/Food-Delivery').then(()=>console.log("DB connected"));
}