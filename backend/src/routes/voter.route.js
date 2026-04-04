import express from "express";
import { loginVoter, getAllVoters, checkVoterAndUserViaAadhar, getVotersByBoothId, assignMobilityBooth, verifyMobilityBooth, getMobilityBoothRequests, getVotersByState } from "../controllers/voter.controller.js";

const router = express.Router();

router.post("/login", loginVoter);
router.get("/all", getAllVoters);
router.get("/by-state", getVotersByState);
router.get("/check-aadhar", checkVoterAndUserViaAadhar);
router.get("/by-booth", getVotersByBoothId);

router.post("/mobility/assign", assignMobilityBooth);
router.post("/mobility/verify", verifyMobilityBooth);
router.get("/mobility/requests", getMobilityBoothRequests);

export default router;