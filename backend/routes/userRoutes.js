import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import rolMidd from "../middleware/roleValidate.js";
const router = express.Router();

router.post(
  "/registerUser",
  userValidate.existingUser,
  rolMidd.existingRole,
  userController.resgisterUser
);
router.get("/listUser/:name?", userController.listUser);
router.post("/login", userController.login);
router.put("/delete/:_id", userController.deleteUser);
router.put("/updateUserAdmin", userController.updateUserAdmin);

export default router;
