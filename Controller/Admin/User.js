import Schema from "../../Modal/User/Signup.js";
// import bcrypt from 'bcrypt';

export const addUser = async (req, res) => {
    
    setTimeout(async () => {
       await new Schema(req.body)
        .save()
        .then(() => {
            
            res.send("User Added Successfully");
        })
        .catch((err) => {
            res.send(`error: ${err}`);
        });
    }, 800);
}

export const viewUser = async (req, res) => {
    
    const Users = await Schema.find(req.body);

    try {
      res.send(Users);
    } catch (error) {
      res.status(500).send(error);
    }
}
export const updateUser = async (req, res) => {
    
    try {
      // bcrypt.compare(password, req.body.password)
      if (!(req.body.data.firstname && req.body.data.phone && req.body.data.email && req.body.data.password)) {
        console.log(req.body.data.firstname)
        res.status(400).send("All input is required");
      }
      
        Schema.updateOne(req.body.filter, req.body.data).then(function (data) {
            res.status(200).json({
                response:"Succesfully Updated User",
                data:data
            });
        });
      
       
      } catch (error) {
        res.status(500).send(error);
      }
}


export const deleteUser = async (req, res) => {
    try {
       
        await   Schema.deleteOne(req.body.filter, req.body.data);
          res.status(200).json({response:"User Deleted Successfuly"});
      
      
      } catch (error) {
        response.status(500).send(error);
      }
}