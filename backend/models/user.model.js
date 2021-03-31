const mongoose = require('mongoose')
// const timestamps = require('mongoose-timestamp');

const Schema = mongoose.Schema;
// this is to basically derive the class


// Schema is a class name and an object of the sam ehas been created
const userSchema = new Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3
    }
    // timestamps:true     // dont know why timestamps is showing an error here?
    // originally --> 
    // },
    // timestamps: true
});


const User = mongoose.model('User',userSchema);

module.exports = User;