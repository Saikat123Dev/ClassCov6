import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {Teacher} from "../models/teacher.model.js"
import { Assignment } from "../models/assignment.model.js";
import mongoose, { Schema } from "mongoose";

const giveAssignment = asyncHandler(async(req,res)=>{
    const {title , description , className,subject,teacherName,guidelines,deadline} = req.body;
    console.log(title)
    if (
    [title, description, className, subject,teacherName,guidelines,deadline].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const assignment = await Assignment.create({
    title,
    description,
    teacherName : "55153a8014829a865bbf700d",
    subject:subject.toLowerCase(),
    className,
    guidelines,
    deadline

  })
  const createdAssignment = await Assignment.findById(assignment._id)

  if (!createdAssignment) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
    return res
    .status(201)
    .json(new ApiResponse(200, createdAssignment, "Assignment created Successfully"));

})

export {
    giveAssignment
}