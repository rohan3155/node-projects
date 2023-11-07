
import express from 'express';
import { checkSubCategory } from '../../Middleware/Admin/SubCategory.js';
import { addSubCategory, deleteSubCategory, updateSubCategory, viewSubCategory } from '../../Controller/Admin/SubCategory.js';

export const ASubCategoryRouter = express.Router()
.post('/addSubCategory',checkSubCategory,addSubCategory)
.post('/viewSubCategory',viewSubCategory)
.post('/updateSubCategory',updateSubCategory)
.post('/deleteSubCategory',deleteSubCategory)