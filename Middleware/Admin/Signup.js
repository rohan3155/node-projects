import Schema from "../../Modal/Admin/Signup.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv';
// dotenv.config();
// let JWT_SECRET_KEY;
// import { privateKey } from "./data/privatekey.js";
export const checkUser = async (req, res, next) => {
  if (!(req.body.firstname && req.body.phone && req.body.email && req.body.password)) {
    res.status(400).send("All input is required");
  }
  let { phone, email,  } = req.body;

  const oldUser = await Schema.findOne({ phone })
  if (oldUser) {


    res.status(409).send("User Already Exist");
  }
  else {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPwd;

    setTimeout(() => {
      
      const accessToken = jwt.sign({email}, "Secret", {

        expiresIn: '7d' // expires in 7 days

         })
      req.body.token = accessToken;
      
    }, 800);
    setTimeout(() => {
      next();
    }, 1000);
  }

}