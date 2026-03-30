import express from "express";
import { getACSByPCCode } from "../controllers/acs.controller.js";

const router = express.Router();

router.get("/:pc_code", getACSByPCCode);

export default router;