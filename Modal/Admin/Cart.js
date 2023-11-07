import mongoose from "mongoose";
const cartSchema = mongoose.Schema(
    {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true

        },
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        quantity: {
            type:String,
            required:true,
            

        },  
    }
)
export default mongoose.model("cart", cartSchema);