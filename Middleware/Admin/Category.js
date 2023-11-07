import Schema from "../../Modal/Admin/Category.js";

export const checkCategory = async (req, res, next) => {

  let { CategoryName   } = req.body;

  const oldCategory= await Schema.findOne({ CategoryName })
  if (oldCategory) {


    res.status(409).json({response:"Category Already Exist"});
  }else{
    next();
  }
  

}