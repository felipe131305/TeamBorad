import task from "../models/task.js";
import user from "../models/user.js";

const registerTask = async (req, res) => {
  if (!req.body.imagenUrl || !req.body.user)
    return res.status(400).send({ message: "Incomplete data" });

  const existinUser = await user.findOne({ email: req.body.user });
  if (!existinUser)
    return res.status(500).send({ message: "the user not exiting" });

  let taksSchema = new task({
    user: existinUser._id,
    name: req.body.name,
    imagenUrl: req.body.imagenUrl,
    taskStatus: "to-do",
  });

  let result = await taksSchema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register task" });
  return res.status(200).send({ result });
};

const deleteTask = async (req, res) => {
  if (!req.params["_id"])
    return res.status(500).send({ messag: "Incomplete data" });
  const tasks = await task.findByIdAndDelete(req.params["_id"]);
  if (!tasks) return res.status(500).send({ message: "Error deleting task" });
  return res.status(200).send({ message: "book deleted " });
};

const updateTask = async (req, res) => {
  if (!req.body._id)
    return res.status(400).send({ message: "Incomplete data" });
  const editTask = await task.findByIdAndUpdate(req.body._id, {
    taskStatus: req.body.taskStatus,
  });
  if (!editTask) return res.status(500).send({ message: "Error update task" });
  return res.status(200).send({ message: "task update" });
};

const listTask = async (req, res) => {
  let tasks = await task.find({ name: new RegExp(req.params["name"]) });
  if (tasks.length === 0)
    return res.status(500).send({ message: "no search results" });
  return res.status(200).send({ tasks });
};



export default { registerTask, deleteTask, updateTask, listTask };
