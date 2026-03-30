import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getBoothsByACCodeService } from "../services/booths.service.js";

export const getBoothsByACSCode = asyncHandler(async (req, res) => {
    const ac_code = String(req.params.acs_code).toUpperCase();

    const booths = await getBoothsByACCodeService(ac_code);


    res.status(200).json(new ApiResponse(200, "Booths retrieved successfully", booths));
});