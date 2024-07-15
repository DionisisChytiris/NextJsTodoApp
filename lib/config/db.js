import mongoose from "mongoose"

export const ConnectDB = async ()=>{
    await mongoose.connect(process.env.DB_URL)
    try {
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Not Connected')
        
    }
}