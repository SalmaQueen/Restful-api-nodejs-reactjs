import mongoose from "mongoose";


export const db= ()=> {

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

}  
    