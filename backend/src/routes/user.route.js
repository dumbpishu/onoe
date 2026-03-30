import express from "express";
import { createUser, getUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;