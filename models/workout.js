const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name of this workout"
    },
    type: {
        type: String,
        required: "Enter type of workout"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter your weight in lbs"
    },
    sets: {
        type: Number,
        required: "Enter number of sets"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Enter a number of reps"
    },
    duration: {
        type: Number,
        required: "Enter the duration of your workout"
    },
    distance: {
        type: Number,
        required: "enter the distance if applicable"
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;