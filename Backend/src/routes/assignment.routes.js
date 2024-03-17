import { Router } from "express";
import { giveAssignment } from "../controllers/assignment.controller.js";
 const router = Router();
 router.route("/assignments").post(giveAssignment)
 export default router;