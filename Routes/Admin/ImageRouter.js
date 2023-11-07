import express from "express";
import { Addimage, del, rename, update, view } from "../../Controller/Admin/ImageController.js";

const Imagerouter = express.Router();
Imagerouter.post('/addimage',Addimage);
Imagerouter.get('/viewimage/:productId',view);
Imagerouter.post('/Updateimage',update);
Imagerouter.post('/deleteimage',del);
Imagerouter.post('/renameimage',rename);


export { Imagerouter };

