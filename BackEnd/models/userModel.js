const mongoose = require("mongoose")
const userSchema = mongoose.Schema ({
    name: {
        type: String,
        require: [true, "Add name"]
    },
    email: {
        type: String,
        require: [true, "Add e-mail"]
    },
    password: {
        type: String,
        require: [true, "Add password"]
    },
    /* PLACEHOLDER IF I WANT TO ADD MORE
    name: {
        type: String,
        require: [true, "Add name"]
    },
    */
},
{
    timestamps: true
})
module.exports = mongoose.model("user", userSchema)