import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN, 
    credentials:true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import  studentRouter from "./routes/student.routes.js"
import notesRouter from "./routes/notes.routes.js"
app.use("/api/v1/students",studentRouter)
app.use("/api/v1/students",notesRouter)
//assignment
import assignmentRouter from "./routes/assignment.routes.js"
import  teacherRouter from "./routes/teacher.routes.js"
app.use("/api/v1/teachers",teacherRouter)
app.use("/api/v1/teachers",assignmentRouter)


export default app;