import Schema from "../../Modal/Admin/SubCategory.js";

export const checkSubCategory = async (req, res, next) => {
  if (!(req.body.SubCategoryName)) {
    res.status(400).send("All input is required");
  }
  let { SubCategoryName   } = req.body;

  const oldSubCategory= await Schema.findOne({ SubCategoryName })
  if (oldSubCategory) {


    res.status(409).send("SubCategory Already Exist");
  }else{
    next();
  }
  

}