import Schema from "../../Modal/Admin/SubCategory.js";
// import bcrypt from 'bcrypt';

export const addSubCategory = async (req, res) => {
    
    setTimeout(async () => {
       await new Schema(req.body)
        .save()
        .then(() => {
            
            res.send("SubCategory Added Successfully");
        })
        .catch((err) => {
            res.send(`error: ${err}`);
        });
    }, 800);
}

export const viewSubCategory = async (req, res) => {
    
    const Product = await Schema.find(req.body);

    try {
      res.send(Product);
    } catch (error) {
      res.status(500).send(error);
    }
}
export const updateSubCategory = async (req, res) => {
    
    try {
        Schema.updateMany(req.body.filter, req.body.data).then(function (data) {
            res.status(200).json({
                response:"Succesfully Updated SubCategory",
                data:data
            });
        });
       
      } catch (error) {
        res.status(500).send(error);
      }
}


export const deleteSubCategory = async (req, res) => {
    try {
      await   Schema.deleteOne(req.body.filter, req.body.data);
      res.status(200).json({response:"Subcategory Deleted Successfuly"});
      } catch (error) {
        response.status(500).send(error);
      }
}