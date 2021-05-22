const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      exercise: String,
      title: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
  totalDuration: { type: Number, default: 20 },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
