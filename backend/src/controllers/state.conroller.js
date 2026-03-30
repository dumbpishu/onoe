import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from "../utils/ApiResponse.js";
import { getStateService } from '../services/state.service.js';

export const getStates = asyncHandler(async (req, res) => {
    const states = await getStateService();
    res.status(200).json(new ApiResponse(200, "States retrieved successfully", states));
})