import express from 'express';
import { LoginUser } from '../../Controller/User/Login.js';


export const ULoginrouter = express.Router()
.post('/Login',LoginUser)