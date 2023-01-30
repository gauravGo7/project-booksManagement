const express = require('express')
const router = express.Router()
const {authentication} = require("../middlewares/commonMiddle")
const {loginUser,createUser} = require("../controllers/userController")
const {createBooks, getBook, updateBook, deleteBook,getBookById} = require("../controllers/bookController")
const {createReview,deleteReview,reviewUpdate }= require("../controllers/reviewController")

//user
router.post("/register", createUser)
router.post("/login", loginUser)

//book
router.post("/books", authentication, createBooks)
router.get("/books", authentication, getBook)
router.get("/books/:bookId", authentication, getBookById)
router.put("/books/:bookId", authentication, updateBook)
router.delete("/books/:bookId", authentication, deleteBook );

//review 
router.post("/books/:bookId/review", createReview ) 
router.put("/books/:bookId/review/:reviewId",reviewUpdate)
router.delete("/books/:bookId/review/:reviewId",deleteReview) 



router.all("/*", (req, res) => {
      res.status(400).send({ status: false, message: "This page does not exist, please check your url" })
})

module.exports = router