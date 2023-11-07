import { addUser, deleteUser, updateUser, viewUser } from "../../Controller/Admin/User.js";
import express from 'express';
import { checkUser } from "../../Middleware/User/Signup.js";

export const AuserRouter = express.Router()
.post('/addUser',checkUser,addUser)
.post('/viewUser',viewUser)
.post('/updateUser',updateUser)
.post('/deleteUser',deleteUser)