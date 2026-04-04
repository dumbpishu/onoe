import express from "express";
import { getECIStats, getCEOStats } from "../controllers/dashboard.controller.js";
import { authenticateOfficer } from "../middlewares/officerAuth.js";

const router = express.Router();

router.get("/eci-stats", getECIStats);
router.get("/ceo-stats", authenticateOfficer, getCEOStats);

export default router;
