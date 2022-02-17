import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    user: {type:mongoose.Schema.ObjectId,ref:"users"},
    name : String,
    taskStatus: "to-do",
    imagenUrl: String,
    registerDate:{type: Date, default:Date.now}
});

const task = mongoose.model("tasks",taskSchema);
export default task;