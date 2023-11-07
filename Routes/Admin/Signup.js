import express from 'express';
import {addUser} from '../../Controller/Admin/Signup.js'
import {checkUser} from '../../Middleware/Admin/Signup.js'

export const ASignuprouter = express.Router()
.post('/Signup',checkUser,addUser)