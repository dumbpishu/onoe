import express from "express";
import { getBoothsByACSCode } from "../controllers/booths.controller.js";

const router = express.Router();

router.get("/:acs_code", getBoothsByACSCode);

export default router;