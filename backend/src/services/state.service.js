import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const getStateService = async () => {
    const states = await mongoose.connection.db.collection("states").find({}).toArray();

    if (!states) {
        throw new ApiError(404, "States not found");
    }
    
    return states;
}