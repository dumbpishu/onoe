import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { nearestMobilityBoothsService } from "../services/mobility_booths.service.js";

export const nearestMobilityBooths = asyncHandler(async (req, res) => {
    const { lat, long } = req.query;

    const mobilityBooths = await nearestMobilityBoothsService(parseFloat(lat), parseFloat(long));

    if (mobilityBooths.length === 0) {
        return res.json(new ApiResponse(true, "No mobility booths found within 20 kilometers.", []));
    }

    res.json(new ApiResponse(true, "Nearest mobility booths retrieved successfully.", mobilityBooths));
})