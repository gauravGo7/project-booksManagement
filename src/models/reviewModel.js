const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
      bookId:{
            type:objectId,
            ref:"bookModel",
            required:true
      },
      reviewedBy:{
            type:String, // value: "reviewer's name"
            default:"Guest",
            required:true,
           
      },
      reviewedAt:{
            type: Date,
            required:true
      },
      rating:{
            type:Number,
            min:1,
            max:5,
            required:true
      },
      review:{
            type:String
      },
      isDeleted:{
            type:Boolean,
            default:false
      },
},{timestamps:true})

module.exports = mongoose.model("reviewModel", reviewSchema)









//   bookId: {ObjectId, mandatory, refs to book model},
//   reviewedBy: {string, mandatory, default 'Guest', value: reviewer's name},
//   reviewedAt: {Date, mandatory},
//   rating: {number, min 1, max 5, mandatory},
//   review: {string, optional}
//   isDeleted: {boolean, default: false},