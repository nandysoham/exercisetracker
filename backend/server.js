const express= require('express');
const cors = require('cors');
// requiring the basic dependencies



//importing mongoose for connection with mongoDB (step-2)
const mongoose= require('mongoose')


require('dotenv').config();
// function config(options?: DotenvConfigOptions): DotenvConfigOutput
// Loads .env file contents into | process.env. Example: 'KEY=value' becomes { parsed: { KEY: 'value' } }


const app = express();
app.get('/', (req, res) => res.send('Hello world!'))


const port = process.env.PORT || 8000;
// new way of defining the port

//using the cors as the middlelayer
app.use(cors());
app.use(express.json());



// connecting to the database(step -2) *

const uri= process.env.ATLAS_URI;
// we need to put this ATLAS_URI to a .env file
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true }
    );

// ATLAS_URI --. is the environment variable --> which stores the mongodb atlas details
// the next line connects uri to mongoose

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB connection done successfully");
})

// here it ends *


// the part from here will call the routers -->
const exerciseRouter=  require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercises',exerciseRouter); // endpoint in url --> /exercise
app.use('/users', userRouter)  // // endpoint in url --> /users




app.listen(port,() => {
    console.log(`the server is running on ${port}`);
});



