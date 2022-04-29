//!FILE FOR ROUTES!
const express = require ("express")
const router = express.Router()
const { getGoals, getGoal, setGoal, updateGoal, deleteGoal } = require ("../controllers/goalController")

//TRIMMED ROUTES, USING FOLDER CONTROLLERS AND FILE goalController.js.
router.get("/", getGoals)

router.get("/:id", getGoal)

// /add route to work as sepcified in project 3 assingment
router.post("/add", setGoal)

router.put("/update/:id", updateGoal)

router.delete("/delete/:id", deleteGoal)

module.exports = router