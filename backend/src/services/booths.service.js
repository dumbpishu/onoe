import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const getBoothsByACCodeService = async (ac_code) => {
    if (!ac_code || typeof ac_code !== "string") {
        throw new ApiError(400, "AC code is required and must be a string");
    }

    console.log("Fetching booths for AC code:", ac_code);

    const booths = await mongoose.connection.db.collection("booths").find({ ac_code }).toArray();

    console.log(`Booths found for AC code ${ac_code}:`, booths);

    if (!booths || booths.length === 0) {
        throw new ApiError(404, "Booths not found for the given AC code");
    }

    return booths;
}