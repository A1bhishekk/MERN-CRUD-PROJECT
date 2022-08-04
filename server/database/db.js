import mongoose from "mongoose";

const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.db5eq.mongodb.net/Roommate`
    try {
      await  mongoose.connect(URL, { useNewUrlParser: true });
         console.log("Database Connected Successfully...");
        
    } catch (error) {
        console.log("Error while connecting to database",error);
    }
}

export default Connection;