const router = require('express').Router();
const Workout = require("../models/workout");

//Get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Update a workout
router.put("/api/workouts/:id", (req, res) => {
  exerciseId = req.params.id;
  exerciseInfo = req.body;

  Workout.findByIdAndUpdate(
    exerciseId,
    { $push: { exercises: exerciseInfo } },
    { new: true }
  )
    .then((chosenWorkout) => {
      res.json(chosenWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Add 1 workout
router.post("/api/workouts/", (req, res) => {

  Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;