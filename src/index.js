const express = require('express')
const mongoose = require('mongoose')
const router = require("./routers/router")
mongoose.set('strictQuery', true)
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/group16Database")
.then(() => console.log("My mongoDB is connected"))
.catch((err) => console.error(err))


app.use("/", router)


app.listen(3000, () => {
      console.log("Express app running on port " + 3000);
})

//create review = delete something
// update review handle edge cases
