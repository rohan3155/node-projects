import express from 'express';
import {addUser} from '../../Controller/User/Signup.js'
import {checkUser} from '../../Middleware/User/Signup.js'

export const USignuprouter = express.Router()
.post('/Signup',checkUser,addUser)