import { ApiError } from "../utils/ApiError.js";
import { Voter } from "../models/voter.model.js";

export const createVoterService = async (voterData) => {
    const voter = await Voter.create(voterData);

    if (!voter) {
        throw new ApiError(500, "Failed to create voter");
    }

    return voter;
};

export const getVotersService = async () => {
    const voters = await Voter.find();

    if (!voters) {
        throw new ApiError(404, "No voters found");
    }

    return voters;
}

export const getVoterByIdService = async (id) => {
    const voter = await Voter.findById(id);

    if (!voter) {
        throw new ApiError(404, "Voter not found");
    }

    return voter;
};