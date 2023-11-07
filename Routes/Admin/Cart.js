import  express  from "express";
import { addItem, removeItem, updateItem, viewItem } from "../../Controller/Admin/Cart.js";


export const cartrouter = express.Router();
cartrouter.post('/addtocart',addItem);
cartrouter.post('/viewcart',viewItem);
cartrouter.post('/updatecart',updateItem);
cartrouter.post('/removefromcart' ,removeItem);

