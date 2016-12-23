const User = require('../../../models/user'); // get our mongoose model


function pSetup (req, res) {

  // create a sample user
  var alex = new User({ 
    name: 'Alejandro Pavon', 
    password: 'password',
    admin: true 
  });

  // save the sample user
  alex.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });

}

module.exports = pSetup;