var connection = require('../config/connection.js');
var orm = require('../config/orm.js');

module.exports.register = function(req, res) {
    var users;
    nextFamilyID(function(data) { //Taking information in the registration page and storing it into the db
        nextfid = data;
        users = {
            "first_name": req.body.firstName,
            "last_name": req.body.lastName,
            "email": req.body.email,
            "password": req.body.password,
            "family_id": nextfid
        }

        connection.query ('INSERT INTO users SET ?', users, function (error, results, fields) {
            if (error) {
                console.log(error);
                res.json({
                    status: false,
                    message: 'Unable to register'
                })
            } else {
                res.redirect('/loginSuccess');
            }
        });
    })
}

function nextFamilyID(cb) {
    orm.all("users", function(res) {
        var newfids;
        if (res.length === 0) {
            newfids = 1;
        } else {
            var fids = res.map(a => a.family_id);
            newfids = Math.max.apply(Math, fids) + 1;
        }
        cb(newfids);
    });
}