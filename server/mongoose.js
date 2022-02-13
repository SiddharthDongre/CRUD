import mongoose from "mongoose";

// Mongoose Connection
mongoose.connect("mongodb+srv://SiddharthDongre:sidddongre06@cluster0.dstpk.mongodb.net/crud?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = mongoose.connection;

db.on("error", () => {
    console.error.bind(console, "Connection error");
});

db.once("open", () => {
    console.log("We are connected");
});

// Mongoose schema, model and document for model collection
const schemaRegister = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

export const documentRegister = mongoose.model("register", schemaRegister);