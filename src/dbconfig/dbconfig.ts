import mongoose from 'mongoose';

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection
        connection.on('connected', ()=>{
            console.log("MongoDB connected successfully");
        })
        connection.on('error', (err)=>{
            console.log("MongoDB connection error : ", err);
            process.exit();
        })
    } catch (error) {
        console.log("DB connection error : ", error)
    }
}