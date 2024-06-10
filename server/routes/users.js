import express from "express";
import {
  getUser,
  update,
  follow,
  unFollow,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id",verifyToken, update);

// Get User
router.get("/find/:id", getUser);



// Follow
router.put("/follow/:id", follow);

// Unfollow
router.put("/unfollow/:id", unFollow);

export default router;
