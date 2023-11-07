import express from 'express';
import { checkCategory } from '../../Middleware/Admin/Category.js';
import { addCategory, deleteCategory, updateCategory, viewCategory } from '../../Controller/Admin/Category.js';


export const ACategoryRouter = express.Router()
.post('/addCategory',checkCategory,addCategory)
.post('/viewCategory',viewCategory)
.post('/updateCategory',updateCategory)
.post('/deleteCategory',deleteCategory)