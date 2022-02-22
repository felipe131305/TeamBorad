import express from "express";
import task from "../controllers/taskController.js";
import taskMidd from "../middleware/taskValidate.js";

const router = express.Router();

router.post("/registerTask", taskMidd.existingTask, task.registerTask);
router.delete("/delete/:_id", task.deleteTask);
router.put("/update", taskMidd.validateUpdate, task.updateTask);
router.get("/listTask/:name?", task.listTask);

export default router;
