const User = require('../../../models/user'); // get our mongoose model
const express = require('express');
const app = express();
const jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens

const secretKey = process.env.JWT_SECRET;

function logIn (req,res){
	User.findOne({
		name: req.body.name
	}, function (err,user){

		if (err) throw err;

		if (!user) {
			res.json ({succes : false, message: 'Authentication failed. User not found.'})
		} else if(user){

			//check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {

       			// if user is found and password is right
        		// create a token
        		var token = jwt.sign(user, secretKey , {
          			expiresIn: '24h' // expires in 24 hours
          		});

        		// return the information including token as JSON
        		res.json({
        			success: true,
        			message: 'Enjoy your token!',
        			token: token
        		});
        	}   
        }
    })
}
module.exports = logIn;