import { Officer } from "../models/officer.model.js";
import { ApiError } from "../utils/ApiError.js";

export const createOfficerService = async (currentOfficerData, newOfficerData) => {
    const { role: currentRole } = currentOfficerData;
    const { role: newRole } = newOfficerData;

    let officer;

    if ((currentRole === "ECI HQ" && newRole === "CEO") ||
        (currentRole === "CEO" && newRole === "DEO") ||
        (currentRole === "DEO" && newRole === "ERO") ||
        (currentRole === "ERO" && newRole === "BLO")) {
        officer = await Officer.create(newOfficerData);
    } else {
        throw new ApiError(403, "Forbidden: You don't have permission to create this officer");
    }

    return officer;
}

export const loginOfficerService = async (email, password, role) => {
    const officer = await Officer.findOne({ email, role: role.toUpperCase() });

    if (!officer) {
        throw new ApiError(401, "Invalid credentials");
    }

    if (!officer.comparePassword(password)) {
        throw new ApiError(401, "Invalid credentials");
    }

    const token = officer.generateAuthToken();
    
    return { officer, token };
}