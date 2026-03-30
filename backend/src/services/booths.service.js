import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const getBoothsByACCodeService = async (ac_code) => {
    if (!ac_code) {
        throw new ApiError(400, "AC code is required");
    }

    const booths = await mongoose.connection.db.collection("booths").find({ ac_code }).toArray();

    if (!booths || booths.length === 0) {
        throw new ApiError(404, "Booths not found for the given AC code");
    }

    return booths;
}