import express from "express";
import roleController from "../controllers/roleController.js";
import rolController from "../controllers/roleController.js";
import rolMidd from "../middleware/roleValidate.js";
const router = express.Router();

// http://localhots:3001/role/api/registerRole
router.post("/registerRole", rolMidd.validateRole,rolController.registerRole);
router.get("/listRole",roleController.listRole)

export default router;
