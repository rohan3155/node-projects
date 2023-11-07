import mongoose from 'mongoose';


const Schema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        default: "NA",
        trim: true,
    },
    BrandName: {
        type: String,
        default: "NA",
        trim: true,
    },
    Description: {
        type: String,
        default: "NA",
        trim: true,
    },
    BuyingPrice: {
        type: String,
        required: true,
        trim: true,
    },
    SellingPrice: {
        type: String,
        required: true,
        trim: true,
    },
    CategoryName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    SubCategoryName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub-Category"
    },

}, { timestamps: true })

export default mongoose.model("Product", Schema);