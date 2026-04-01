import express from "express";
import { getStreamToken } from "../controllers/chatController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// when you pass an array of middleware to Express, it automatically flattens and executes them sequentially, one by one.
router.get("/token", protectRoute, getStreamToken);

export default router;
