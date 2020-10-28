// Copied layout from NOSQL MODULE 26

// DEPENDENCIES
const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workoutDetails => {
        console.log(workoutDetails);
        res.json(workoutDetails);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(8).then(workoutDetails => {
        res.json(workoutDetails)
    })
    .catch(err =>{
        res.status(400).json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},{new:true})
    .then(workoutDetails => {
        res.json(workoutDetails)
    })
    .catch(err => {
        res.json(404).json(err);
    });
});

// COPIED FROM NOSQL MODULE 26
// creates an exercise
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutDetails => {
            console.log("workout added");
            res.json(workoutDetails);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// not sure what this does
// insertMany????
// router.post("/api/workouts", (req, res) => {
//     Exercise.create({})
//         .then(workoutDetails => {
//             console.log("Exercise added");
//             res.json(workoutDetails);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// grab a transaction??
// router.get("/api/workouts", (req, res) => {
//     Exercise.find({})
//     .sort({ date: -1 })
//     .then(dbExercise => {
//         res.json(workoutDetails);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

module.exports = router;