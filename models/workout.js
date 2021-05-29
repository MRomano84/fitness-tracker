const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Workout type required. Example: resistance, cardio",
            },

            name: {
                type: String,
                trim: true,
                required: "Workout name required. Example: bicept curl",
            },

            duration: {
                type: Number,
                required: "Please enter duration of exercise",
            },

            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },

            distance: {
                type: Number,
            },
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;