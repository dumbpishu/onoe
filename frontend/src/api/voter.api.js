import api from "@/lib/axios";

export const getAllVoters = async (params = {}) => {
    try {
        const response = await api.get("/voters/all", { params });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch voters");
    }
};
