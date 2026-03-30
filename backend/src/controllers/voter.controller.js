import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";

export const createVoterFromUser = asyncHandler(async (req, res) => {
    const userId = req.params.userId;

})