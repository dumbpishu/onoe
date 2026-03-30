import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFromBuffer } from "../services/cloudinary.service.js";
import { createUserService, getUsersService, getUserByIdService } from "../services/user.service.js";

export const createUser = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json(new ApiResponse(400, "No file uploaded"));
  }

  const uploadResult = await uploadFromBuffer(req.file.buffer);
  req.body.imageUrl = uploadResult.secure_url;

  const userData = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(new ApiResponse(201, "User created successfully", newUser));
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await getUsersService();

  return res.status(200).json(new ApiResponse(200, "Users retrieved successfully", users));
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);

  return res.status(200).json(new ApiResponse(200, "User retrieved successfully", user));
});
