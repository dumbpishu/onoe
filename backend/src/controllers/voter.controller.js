import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFromBuffer } from "../services/cloudinary.service.js";
import { createVoterService, getVotersService, getVoterByIdService } from "../services/voter.service.js";

export const createVoter = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json(new ApiResponse(400, "No file uploaded"));
  }

  const uploadResult = await uploadFromBuffer(req.file.buffer);
  req.body.imageUrl = uploadResult.secure_url;

  const voterData = req.body;

  const newVoter = await createVoterService(voterData);

  return res.status(201).json(new ApiResponse(201, "Voter created successfully", newVoter));
});

export const getVoters = asyncHandler(async (req, res) => {
  const voters = await getVotersService();

  return res.status(200).json(new ApiResponse(200, "Voters retrieved successfully", voters));
});

export const getVoterById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const voter = await getVoterByIdService(id);

  return res.status(200).json(new ApiResponse(200, "Voter retrieved successfully", voter));
});