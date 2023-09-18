import mongoose from "mongoose";

let db, registerSchema, registerModel;

mongoose.connect("mongodb://127.0.0.1:27017/CRUD");

db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "Connection Error");
});

db.once("open", () => {
  console.log("We are connected");
});

registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

registerModel = mongoose.model("data", registerSchema);

export { registerModel };