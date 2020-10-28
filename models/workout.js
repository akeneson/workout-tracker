// copied layout of NOSQL MODULE 26
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Enter the type of workout"
            },
            duration: {
                type: Number,
                required: "Enter the duration of the workout"
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
                type: Number
            }
        }
    ]
}
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;