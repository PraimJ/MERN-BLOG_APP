import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }

})

export default mongoose.model("User", userSchema);

//in mongoDB the collection will be called users, instead as User because of naming conventions

//A Mongoose schema defines the structure of the document, default values, 
//validators, etc., whereas a Mongoose model provides an interface to the database 
//for creating, querying, updating, deleting records, etc.
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection
// and defines the shape of the documents within that collection.

