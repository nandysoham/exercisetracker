const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: '+ err));
});


router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description= req.body.description;
    const duration =Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(users => res.json('Exercise added'))    // --> will print/ return the following statements using a json file
        .catch(err => req.status(400).json('Errors : '+err));
})


module.exports = router;