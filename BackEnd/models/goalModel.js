const mongoose =  require ("mongoose")

const goalSchema = mongoose.Schema(
    {
        /*USER ASSOCIATED WITH GOAL */
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user"

        },
        text: {
            type: String,
            required: [true, "add text"]
    }
}, 
{
    timestamps: true,
})


module.exports = mongoose.model("Goal", goalSchema)