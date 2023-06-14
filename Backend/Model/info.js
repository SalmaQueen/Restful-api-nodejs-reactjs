import mongoose from "mongoose";

//create a schema then a model

//infoSchema
const infoSchema = new mongoose.Schema(
    {
        name:String,
        message:String
    }
)

//create the model using the schema

const Info = mongoose.model("contact", infoSchema);

export default Info;
