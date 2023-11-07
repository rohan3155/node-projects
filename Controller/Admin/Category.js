import Schema from "../../Modal/Admin/Category.js";
// import bcrypt from 'bcrypt';

export const addCategory = async (req, res) => {
    
    setTimeout(async () => {
       await new Schema(req.body)
        .save()
        .then(() => {
     
            
            res.status(200).json({response:"Category Added Successfully"});
        })
        .catch((err) => {
            res.send(`error: ${err}`);
        });
    }, 800);
}

export const viewCategory = async (req, res) => {
    
    const Product = await Schema.find(req.body);

    try {
      res.send(Product);
    } catch (error) {
      res.status(500).send(error);
    }
}
export const updateCategory = async (req, res) => {
    
    try {
        Schema.updateMany(req.body.filter, req.body.data).then(function (data) {
            res.status(200).json({
                response:"Succesfully Updated Category",
                data:data
            });
        });
       
      } catch (error) {
        res.status(500).send(error);
      }
}


export const deleteCategory = async (req, res) => {
    try {
      await   Schema.deleteOne(req.body.filter, req.body.data);
      res.status(200).json({response:"category Deleted Successfuly"});
      } catch (error) {
        response.status(500).send(error);
      }
}