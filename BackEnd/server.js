const express = require("express")
const dotenv = require("dotenv").config()
//USAGE IS TO BRING ERROR HANDLER HERE FROM MIDDLEWARE FOLDER
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/goals", require("./Routes/goalRoutes"))

// Use this and not the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log ("Server started on port " +  port))