import Schema from "../../Modal/Admin/Product.js";
// import bcrypt from 'bcrypt';

export const addProduct = async (req, res) => {
    
    setTimeout(async () => {
       await new Schema(req.body)
        .save()
        .then(() => {
            
            res.send("Product Added Successfully");
        })
        .catch((err) => {
            res.send(`error: ${err}`);
        });
    }, 800);
}

export const viewProduct = async (req, res) => {
    
    const Product = await Schema.find(req.body).populate(["CategoryName","SubCategoryName"]);

    try {
      res.send(Product);
    } catch (error) {
      res.status(500).send(error);
    }
}
export const updateProduct = async (req, res) => {
    
    try {
        Schema.updateMany(req.body.filter, req.body.data).then(function (data) {
            res.status(200).json({
                response:"Succesfully Updated Product",
                data:data
            });
        });
       
      } catch (error) {
        res.status(500).send(error);
      }
}


export const deleteProduct = async (req, res) => {
    try {
        await   Schema.deleteOne(req.body.filter, req.body.data);
      res.status(200).json({response:"Product Deleted Successfuly"});
      } catch (error) {
        response.status(500).send(error);
      }
}