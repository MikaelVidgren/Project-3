//!FILE FOR ROUTES!
const express = require ("express")
const router = express.Router()
const { getGoals, getGoal, setGoal, updateGoal, deleteGoal } = require ("../controllers/goalController")
//To protect the route
const {protect} = require ("../middleware/authMiddleware")

//TRIMMED ROUTES, USING FOLDER CONTROLLERS AND FILE goalController.js.
router.get("/", protect, getGoals)

router.get("/:id", protect, getGoal)

// /add route to work as sepcified in project 3 assingment
router.post("/add", protect, setGoal)

router.put("/update/:id", protect, updateGoal)

router.delete("/delete/:id", protect, deleteGoal)

module.exports = router