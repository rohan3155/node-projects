import express from 'express';
import { LoginUser } from '../../Controller/Admin/Login.js';


export const ALoginrouter = express.Router()
.post('/Login',LoginUser)