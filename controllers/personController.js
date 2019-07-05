const Person = require('../models/Person');

//retreive all persons
exports.getPersons = (req, res) => {
    Person.find().then(persons => {
        res.send(persons);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//retreive person details
exports.getPerson = (req, res) => {
    const id = req.params.id;
    Person.findById(id).then(person => {
        res.send(person)
    }).catch(err => {
        res.status(404).send({
            message: 'Person not found with id ' + id
        });
    });
};

// add new person
exports.addPerson = (req, res) => {
    const person = new Person();
    person.firstName = req.body.firstName;
    person.lastName = req.body.lastName;
    person.email = req.body.email;
    person.phoneNo = req.body.phoneNo;
    person.gender = req.body.gender;
    person.age = req.body.age;
    person.country = req.body.country;
    person.occupation = req.body.occupation;
    person.comments = req.body.comments;
    person.hobbies = req.body.hobbies;
    person.profilePicture = req.body.profilePicture;

    person.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// update person information
exports.updatePerson = (req, res) => {
    const id = req.params.id;
    Person.findByIdAndUpdate(id, {
        firstNam: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        gender: req.body.gender,
        age: req.body.age,
        country: req.body.country,
        occupation: req.body.occupation,
        comments: req.body.comments,
        hobbies: req.body.hobbies,
        profilePicture: req.body.profilePicture
    }, {
        new: true
    }).then(person => {
        if (!person) {
            return res.status(404).send({
                message: 'No Person found with id ' + id
            });
        }
        res.send(person);
    }).catch(err => {
        return res.status(500).send({
            message: 'Error updating person with id ' + id
        });
    });
};

// remove person
exports.deletePerson = (req, res) => {
    const id = req.params.id;
    Person.findByIdAndRemove(id).then(person => {
        if (!person) {
            return res.status(404).send({
                message: 'Person not found with id ' + id
            });
        }
        return res.send({
            message: 'Person deleted successfully'
        });
    }).catch(err => {
        return res.status(500).send({
            message: 'Could not delete person with id ' + id
        });
    });

};

exports.personToGroup = (req, res) => {
    const group = req.body.group;
    const person = req.body.person;

    Group.findOne({
        name: group
    }).then(group => {
        Person.findOne({
            id: person
        }, (err, person) => {
            if (person) {
                // ObjectID to the the Person's groups array field
                person.groups.push(group);
                person.save();
                res.json({
                    message: 'Person assigned to group successfully!'
                });
            }
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

};