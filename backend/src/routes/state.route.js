import express from "express";
import { getStates } from "../controllers/state.conroller.js";

const router = express.Router();

router.get("/", getStates);

export default router;