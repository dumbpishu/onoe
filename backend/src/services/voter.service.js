import { User } from "../models/user.model.js";
import { Voter } from "../models/voter.model.js";
import { ApiError } from "../utils/ApiError.js";
import { generateVoterId, isUserFullyVerified } from "../utils/voter.js";

export const createVoterService = async (aadharNumber) => {
    const user = await User.findOne({ aadharNumber });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const voterExists = await Voter.findOne({ aadharNumber: user.aadharNumber });

    if (voterExists) {
        throw new ApiError(400, "Voter already exists for this user");
    }

    if (!isUserFullyVerified(user.verification)) {
        throw new ApiError(403, "User is not fully verified by all levels");
    }

    const voterId = generateVoterId(user.state);

    const voter = await Voter.create({
        user: user._id,
        aadharNumber: user.aadharNumber,
        voterId,
        state: user.state,
        pcCode: user.pcCode,
        acsCode: user.acsCode,
        boothCode: user.boothCode,
    });

    return voter;
};