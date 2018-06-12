var connection = require('../config/connection.js');

module.exports.login = function(req, res) {
    var email = req.body.email; //Takes email entered into login page
    var password = req.body.password; //Takes password entered into login page
    var session = req.session; //Saves cookie
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'Unable to login'
            })
        } else {
            if(results.length > 0) { //Results is what it finds in the db with above query
                if(password == results[0].password) { //Below is the information being set in the session
                    session.email = results[0].email;
                    session.family_id = results[0].family_id;
                    session.user_id = results[0].id;
                    res.redirect('/dashboard');
                } else { //If password on page does not match password in db.
                    res.json({
                        status: false,
                        message: 'Email and password do not match'
                    });
                }
            } else { //If login information does not exist
                res.json({
                    status: false,
                    message: 'Email does not exist'
                });
            }
        }
    });
}