import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const nearestMobilityBoothsService = async (latitude, longitude) => {
    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
        throw new ApiError(400, "Valid latitude and longitude are required.");
    }

    const mobilityBooths = await mongoose.connection.db.collection("mobility_booths").find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 500000 // 500 km
            }
        }
    }).toArray();

    return mobilityBooths;
}