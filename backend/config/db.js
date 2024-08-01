import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rudraneel:rana1970@cluster0.i5zuspn.mongodb.net/ecom');
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
};