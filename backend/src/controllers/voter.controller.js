import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { loginVoterService, getAllVotersService } from "../services/voter.service.js";

export const loginVoter = asyncHandler(async (req, res) => {
    const { uniqueVoterId, password } = req.body;

    const { voter, token } = await loginVoterService(uniqueVoterId, password);

    return res.status(200).json(new ApiResponse(200, "Login successful", { voter, token }));
});

export const getAllVoters = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const filter = {};
    if (req.query.state) filter.state = req.query.state;
    if (req.query.district) filter.district = req.query.district;
    if (req.query.assembly) filter.assembley = req.query.assembly;
    if (req.query.gender) filter.gender = req.query.gender;

    const { voters, pagination } = await getAllVotersService(page, limit, filter);

    return res.status(200).json(new ApiResponse(200, "Voters fetched successfully", { voters, pagination }));
});