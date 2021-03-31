const mongoose = require('mongoose'), timestamps = require('mongoose-timestamp');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username : { type : String, required : true },
    description : {type : String, required : true},
    duration : {type : Number, required: true},
    date : {type : Date, required: true},
},{
    timestamps: true,
});


// Now we have to create the routes so that the database can do CRUD operation --. create read, Update, Delete



const Exercise = mongoose.model('Exercise', exerciseSchema);

mongoose.model.exports = Exercise;