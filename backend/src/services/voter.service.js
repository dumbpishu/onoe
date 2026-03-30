import { User } from "../models/user.model";
import { Voter } from "../models/voter.model";
import { ApiError } from "../utils/ApiError";

export const createVoterService = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const existingVoter = await Voter.findOne({ user: userId });
}