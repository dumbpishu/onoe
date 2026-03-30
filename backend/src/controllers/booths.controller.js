import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getBoothsByACCodeService } from "../services/booths.service";

export const getBoothsByACSCode = asyncHandler(async (req, res) => {
    const { acs_code } = req.params;

    const booths = await getBoothsByACCodeService(acs_code);

    res.status(200).json(new ApiResponse(200, "Booths retrieved successfully", booths));
});