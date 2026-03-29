import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createOfficerService, loginOfficerService} from "../services/officer.service.js";
import { Officer } from "../models/officer.model.js";

export const createOfficer = asyncHandler(async (req, res) => {
    const officerData = req.body;
    const newOfficer = await Officer.create(officerData);

    return res.status(201).json(new ApiResponse(201, "Officer created successfully", newOfficer));
    // const currentOfficer = req.officer;
    // const newOfficerData = req.body;

    // const newOfficer = await createOfficerService(currentOfficer, newOfficerData);

    // return res.status(201).json(new ApiResponse(201, "Officer created successfully", newOfficer));
});

export const loginOfficer = asyncHandler(async (req, res) => {
    const { email, password, role } = req.body;

    const { officer, token } = await loginOfficerService(email, password, role);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.status(200).json(new ApiResponse(200, "Login successful", officer));
});
