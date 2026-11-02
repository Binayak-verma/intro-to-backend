import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Route: /api/users
router.route("/").post(createUser).get(getAllUsers);

// Route: /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
