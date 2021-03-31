const router = require('express').Router();
const User = require('../models/user.model');       
// this is teh model extracted from the models loaction


router.route('/').get((req,res)=>{
    User.find()
        .then(users => res.json(users))    // --> returns a json file conatining the name of the user to be found
        .catch(err => res.status(400).json('Errors: '+err));    // --> else will catch the errors
});


router.route('/add').post((req,res) => {
    const username = req.body.username;       // will pick up the username which we wll be paising via a json file

    const newUser = new User({username});     // will craete a object with the username as the name or as an instance

    newUser.save()
        .then(users => res.json('User added'))    // --> will print/ return the following statements using a json file
        .catch(err => res.status(400).json('Errors : '+err)); // will retun the error by this statement

});

module.exports = router;

