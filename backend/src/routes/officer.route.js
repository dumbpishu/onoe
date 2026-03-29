import express from "express";
import { createOfficer, loginOfficer } from "../controllers/officer.controller.js";

const router = express.Router();

router.post("/login", loginOfficer);
router.post("/create", createOfficer);

export default router;