import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const getPCSService = async (state_code) => {
    console.log("getPCSService called with state_code:", state_code); // Debug log
    if (!state_code) {
        throw new ApiError(400, "State code is required");
    }

    const count = await mongoose.connection.db
        .collection("pcs")
        .countDocuments();

    console.log("PCS COUNT:", count);

    const sample = await mongoose.connection.db
        .collection("pcs")
        .findOne();

    console.log("SAMPLE:", sample);
    console.log("TYPE:", typeof sample.state_code);
    console.log("VALUE:", sample.state_code);

    const pcsList = await mongoose.connection.db.collection("pcs").find({ state_code }).toArray();

    if (!pcsList || pcsList.length === 0) {
        throw new ApiError(404, "PCS not found for the given state code");
    }

    return pcsList;
}