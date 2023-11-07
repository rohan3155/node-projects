import mongoose from "mongoose";
const ImageSchema = mongoose.Schema(
    {
        ProductId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        ImageId: {
            type: String,
            required: true
        },
        
    }
)
export default mongoose.model("images", ImageSchema);
