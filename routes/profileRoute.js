import express from "express";
import { getProfile, linkGameAccount } from "../controllers/profile.controller.js";
const router = express.Router();
import ensureAuth  from "../middleware/auth.middleware.js";

router.get('/', ensureAuth, getProfile);
router.post('/link-game', ensureAuth, linkGameAccount);

export default router;
