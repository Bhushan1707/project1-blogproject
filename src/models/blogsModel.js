const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogsModel=new mongoose.Schema(
    {
    title: {
        type:String,
        required:true
    }, 
    body: {
        type:String,
        required:true
    },
    authorId:{
        type:ObjectId,
        ref:"Author",
        req : true
    },
    tags: [String], 
    category: {
        type:String,
        required:true
    },
    subcategory:{
        type:[String],
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt:{
        type:Date
    },
    isDeleted: {
        type:Boolean,
        default: false
    },
    deletedAt : {
        type : Date
    }
},{ timestamps: true });


module.exports=mongoose.model('blogs', blogsModel)