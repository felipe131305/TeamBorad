import task from "../models/task.js";

const existingTask = async (req, res, next) => {
  if (!req.body.name)
    return res.status(400).send({ message: "Incomplete data" });
  const existingName = await task.findOne({ name: req.body.name });

  if (existingName)
    return res.status(500).send({ message: "the task is already registered" });
    next();
};

const validateUpdate = async(req,res,next)=>{
    if(req.body.taskStatus ==="to-do" || req.body.taskStatus ==="in-progress" || req.body.taskStatus ==="finish" ){
       next();
    }else if (!req.body.taskStatus) {
        res.status(500).send({ message: "Incomplete data" });
    } else {
        res.status(500).send({ message: "the state you are entering does not correspond" });
    }
    }


export default {existingTask, validateUpdate}