import express from 'express';
import { checkProduct } from "../../Middleware/Admin/Product.js";
import { addProduct, deleteProduct, updateProduct, viewProduct } from '../../Controller/Admin/Product.js';


export const AProductRouter = express.Router()
.post('/addProduct',checkProduct,addProduct)
.post('/viewProduct',viewProduct)
.post('/updateProduct',updateProduct)
.post('/deleteProduct',deleteProduct)