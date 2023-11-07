import mongoose from 'mongoose';


const Schema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        default: "NA",
        trim: true,
    },
    lastname: {
        type: String,
        default: "NA",
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    
},{ timestamps: true })

export default mongoose.model("Admin", Schema);