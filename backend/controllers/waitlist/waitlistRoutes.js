import express from "express";
import { joinWaitlist } from "./waitlist";
const router = express.Router();

router.post("/", joinWaitlist);

export default router;
