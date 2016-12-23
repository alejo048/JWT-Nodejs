const User = require('../../../models/user'); // get our mongoose model

function getUSers (req, res){
	User.find()
		.then(User => res.json (User))
}

module.exports = getUSers;