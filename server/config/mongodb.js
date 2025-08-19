import mongoose from "mongoose";
const connectDb = async () =>{
    mongoose.connection.on('connected',()=>console.log('Db successfully connected'))
    await mongoose.connect(`${process.env.MONGO_Db_URI}/CareerMentorShipPlateform`)
}

export default connectDb;