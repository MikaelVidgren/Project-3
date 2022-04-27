const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

//comment placeholder
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//comment placeholder
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal " + req.params.id });
});

//comment placeholder
const setGoal = asyncHandler(async (req, res) => {
  //if comment (actually checking if not with !-mark)
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add text");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//comment placeholder
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

//comment placeholder
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
module.exports = {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
