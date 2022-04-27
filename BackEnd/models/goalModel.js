const mongoose =  require ("mongoose")

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "add text"]
    }
}, 
{
    timestamps: true,
})


module.exports = mongoose.model("Goal", goalSchema)