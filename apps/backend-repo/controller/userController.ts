import { Request, Response } from "express";
import { fetchUserData, updateUserData } from "../repository/userCollection";
import { CustomRequest } from "../src/types/custom";

export const fetchUser = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
    }

    const user = await fetchUserData(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export const updateUser = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.uid;
    if (!userId) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
    }

    await updateUserData(userId, req.body);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};
