import mongoose from 'mongoose';


const Schema = mongoose.Schema({
    SubCategoryName: {
        type: String,
        required: true,
    },
    
},{ timestamps: true })

export default mongoose.model("Sub-Category", Schema);