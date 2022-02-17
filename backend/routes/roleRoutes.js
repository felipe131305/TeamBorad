import express from "express";
import rolController from "../controllers/roleController.js";
const router = express.Router();

// http://localhots:3001/role/api/registerRole
router.post("/registerRole", rolController.registerRole);

export default router;
