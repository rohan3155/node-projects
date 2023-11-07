import Schema from "../../Modal/User/Signup.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const LoginUser = async (req, res) => {
    
    const { phone, password,email} = req.body;

    // Validate user input
    if (!(phone && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await Schema.findOne({ phone });
// console.log(user.firstname)
    if (user && ( bcrypt.compare(password, req.body.password))) {
      // Create token
      const accessToken = jwt.sign({email}, "Secret", {

        expiresIn: '7d' // expires in 7 days

    })
    // save user token
      req.body.token = accessToken;


      // user
      res.status(200).json({result:"You Are Succesfully Logged into your Account",
    token:accessToken,
    name:user.firstname,
    id:user._id
    } );
    }
       
}