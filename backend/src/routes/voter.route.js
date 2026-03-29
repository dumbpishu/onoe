import express from "express";
import { createVoter, getVoterById, getVoters } from "../controllers/voter.controller.js";

const router = express.Router();

router.post("/create", createVoter);
router.get("/", getVoters);
router.get("/:id", getVoterById);

export default router;