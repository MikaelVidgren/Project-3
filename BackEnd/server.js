const express = require("express")
const dotenv = require("dotenv").config()
//USAGE IS TO BRING ERROR HANDLER HERE FROM MIDDLEWARE FOLDER
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
//PROCESS.ENV.PORT SO WILL WORK WITH HEROKU
const port = process.env.PORT || 5000
//connectDB to ocnnect mongoose from db.js file
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// "/api/getall" usage to get all items, "./routes/goalroutes" used to connect to route file for working routes
app.use("/api/getall", require("./Routes/goalRoutes"))
app.use("/api/users", require("./Routes/userRoutes"))

// Use this and not the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log ("Server started, port number is " +  port))