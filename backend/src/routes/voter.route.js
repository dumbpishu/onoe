import express from "express";
import { loginVoter, getAllVoters } from "../controllers/voter.controller.js";

const router = express.Router();

router.post("/login", loginVoter);
router.get("/all", getAllVoters);

export default router;