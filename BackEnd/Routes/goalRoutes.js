//!FILE FOR ROUTES!
const express = require ("express")
const router = express.Router()
const { getGoals, getGoal, setGoal, updateGoal, deleteGoal } = require ("../controllers/goalController")

//TRIMMED ROUTES, USING FOLDER CONTROLLERS AND FILE goalController.js.
router.get("/", getGoals)

router.get("/:id", getGoal)

router.post("/", setGoal)

router.put("/:id", updateGoal)

router.delete("/:id", deleteGoal)

module.exports = router