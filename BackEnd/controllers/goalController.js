const asyncHandler = require("express-async-handler");
//PLACEHOLDER CONST "Goal", frontend will probably be music API.
const Goal = require("../models/goalModel");

//returns all documents
const getGoals = asyncHandler(async (req, res) => {
  const getall = await Goal.find();
  res.status(200).json(getall);
});

//return one item with given id
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal " + req.params.id });
});

//Create new item
const setGoal = asyncHandler(async (req, res) => {
  //if comment (actually checking if not with !-mark) if empty text, will throw error
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add text");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//Delete item with id given
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
//if no goal found throw error
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

//Updates item with given id
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
//Export routes from goalRoutes.js file
module.exports = {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
