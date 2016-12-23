// =======================
// get the packages we need 
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const fs = require('fs');


//si existe el archivo .env lee las variables de entorno del archivo
const thereIsDotEnv = fs.existsSync('.env')
if ( thereIsDotEnv ) require('dotenv').load()
	
// =======================
// configuration 
// =======================

var port = process.env.PORT || 3000; //entorn variable PORT
mongoose.connect(process.env.DB); // connect to database


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));



// =======================
// routes 
// =======================

const authRoutes = require('./app/routes/auth')

// basic route
app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port + '/');
});

// API ROUTES -------------------
app.use( authRoutes )





// =======================
// start the server 
// =======================

app.listen(port);
console.log('Magic happens at http://localhost:' + port);