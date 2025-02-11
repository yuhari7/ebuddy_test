import express from "express";
import authMiddleware from "../middleware/authMiddleware";
import { fetchUser, updateUser } from "../controller/userController";

const router = express.Router();

router.get("/fetch-user-data", authMiddleware, fetchUser);
router.post("/update-user-data", authMiddleware, updateUser);

export default router;
