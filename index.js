import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import { cartrouter } from './Routes/Admin/Cart.js';
import { ACategoryRouter } from './Routes/Admin/Category.js';
import { ALoginrouter } from './Routes/Admin/Login.js';
import { AProductRouter } from './Routes/Admin/Product.js';
import { ASignuprouter } from './Routes/Admin/Signup.js';
import { ASubCategoryRouter } from './Routes/Admin/SubCategory.js';
import { AuserRouter } from './Routes/Admin/User.js';
import { ULoginrouter } from './Routes/User/Login.js';
import { USignuprouter } from './Routes/User/Signup.js';

import dotenv from "dotenv";
import { Imagerouter } from './Routes/Admin/ImageRouter.js';
import connectDB from './db.js';




//configure env
dotenv.config();

//databse config
connectDB();






const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('C:/Users/kashi/OneDrive/Desktop/node projects/imagesfolder'));
app.use('/User', USignuprouter);
app.use('/User', ULoginrouter);
app.use('/Admin', ASignuprouter);
app.use('/Admin', cors(), ALoginrouter);
app.use('/Admin', AuserRouter);
app.use('/Admin', AProductRouter);
app.use('/Admin', ACategoryRouter);
app.use('/Admin', ASubCategoryRouter);
app.use('/Admin', Imagerouter);
app.use('/User', cartrouter);

//PORT
const PORT = process.env.PORT || 3155;



//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
