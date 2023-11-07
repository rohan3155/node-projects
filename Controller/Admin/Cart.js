import cartSchema from "../../Modal/Admin/Cart.js";

export const addItem = (req, res) => {
  new cartSchema(req.body)
    .save()
    .then(() => {
      res.send("New item  added to the cart");
    })
    .catch((err) => {
      res.send("something went wrong" + "\n" + err);
    });
};

export const viewItem = async (req, res) => {
  let {UserId} = req.body;
  if(UserId){
  cartSchema
    .find(req.body)
    .populate("productId")
    .then(function (data) {
      // console.log(req.body)
      res.send(data);
    });
  }else{
    res.json({
      message:"no item in your cart"
    })
  }
};

export const updateItem = (req, res) => {
  cartSchema.updateOne(req.body.filter, req.body.data).then(function (data) {
    res.json({
      response: "cart item  updated",
      cart: data,
    });
  });
};
export const removeItem = async (req, res) => {
  try {
    await cartSchema.deleteOne(req.body);
    res.status(200).json({ response: "cart item removed" });
  } catch (error) {
    response.status(500).send(error);
  }
};
