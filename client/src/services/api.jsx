import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true,
});

export const getMatches = async () => {
  try {
    const response = await api.get("/matches");
    console.log("Response data:", response);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch matches");
  }
};
