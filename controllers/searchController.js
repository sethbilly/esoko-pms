const Person = require('../models/Person');

//search person first name and send along person
exports.search = (req, res) => {
    Person.find({
            firstName: '/^' + req.body.searchString + '/i'
        }).populate('groups')
        .exec(function (err, groups) {
            if (err) {
                return res.status(404).send({
                    message: 'No results found'
                });
            }
            res.send(groups);
        });
};