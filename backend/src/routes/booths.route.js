import express from "express";
import { getBoothsByACCodeService } from "../services/booths.service.js";

const router = express.Router();

router.get("/:acs_code", getBoothsByACCodeService);

export default router;