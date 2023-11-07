import mongoose from 'mongoose';


const Schema = mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
    },
    
    
},{ timestamps: true })

export default mongoose.model("Category", Schema);