import {Router} from "express"
import { registerStudent,loginUser,logoutUser } from "../controllers/student.controller.js"
import {upload} from "../middleware/multer.middleware.js"
import {verifyJWT} from "../middleware/auth.middleware.js"
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ]),
    registerStudent
)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,  logoutUser)

export default router