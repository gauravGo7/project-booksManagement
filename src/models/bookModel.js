const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
      title:{
            type:String,
            required:true,  // evil return 1920 \\ 1920446465
            unique:true,
            trim:true
      },
      excerpt:{
            type:String,
            required:true,
            trim:true
      },
      userId:{
            type:objectId,
            ref:"userModel"
      },
      ISBN:{
            type:String,
            required:true,
            unique:true
      },
      category:{
            type:String,
            required:true
      },
      subcategory:{
            type:String,
            required:true
      },
      reviews:{
            type:Number,
            default:0
      },
      isDeleted:{
            type:Boolean,
            default:false
      },
      deletedAt:{
            type:Date,
            
      },
      
      releasedAt:{
            type:Date,
            required:true
      },

},{timestamps:true})

module.exports = mongoose.model("bookModel", bookSchema)
