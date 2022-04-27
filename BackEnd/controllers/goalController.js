const asyncHandler = require("express-async-handler")

//comment placeholder
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json ({ message: "Get goals"})
})

//comment placeholder
const getGoal = asyncHandler(async (req, res) => {
    res.status(200).json ({ message: "Get goal " + req.params.id})
})

//comment placeholder
const setGoal = asyncHandler(async (req, res) => {
    //if comment (actually checking if not with !-mark)
    if (!req.body.text) {
        res.status(400)
        throw new Error("Add text")
    }

    res.status(200).json ({ message: "Set goal"})
})

//comment placeholder
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json ({ message: "Delete goal " + req.params.id})
})

//comment placeholder
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json ({ message: "Update goal " + req.params.id })
})
module.exports = {
    getGoals,
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}