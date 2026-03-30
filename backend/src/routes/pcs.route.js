import express from "express";
import { getPCSByStateCode } from "../controllers/pcs.controller.js";

const router = express.Router();

router.get("/:state_code", getPCSByStateCode);

export default router;