import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    //Image is a string because the url is a string
    user: {
        type: mongoose.Types.ObjectId, //type is the mongoose type of ObjectID from the Schema
        ref: "User", // This references to the User Schema
        required: true // the blog can only contian 1 user
    },
});

export default mongoose.model("Blog", blogSchema);
