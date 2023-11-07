import Schema from "../../Modal/Admin/Product.js";

export const checkProduct = async (req, res, next) => {
  // if (!(req.body.ProductName && req.body.BuyingPrice && req.body.SellingPrice && req.body.CategoryName)) {
  //   res.status(400).json({response:"All input is required"});
  // }
  let { ProductName   } = req.body;

  const oldProduct= await Schema.findOne({ ProductName })
  if (oldProduct) {


    res.status(409).json({response:"Product Already Exist"});
  }else{
    next();
  }
  

}