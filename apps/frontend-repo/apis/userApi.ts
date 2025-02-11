import axios from "axios";
import { User } from "../interfaces/user";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUserData = async (token: string): Promise<User> => {
  const response = await apiClient.get("/fetch-user-data", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUserData = async (
  token: string,
  data: Partial<User>
): Promise<void> => {
  await apiClient.post("/update-user-data", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
