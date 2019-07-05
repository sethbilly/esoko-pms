const Group = require('../models/Group');

//add new group
exports.addGroup = (req, res) => {
    const group = new Group();
    group.name = req.body.name;
    group.description = req.body.description;
    group.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getGroup = (req, res) => {
    const id = req.params.id;
    Group.findById(id).then(group => {
        res.send(group);
    }).catch(err => {
        res.status(404).send({
            message: 'No group found with id ' + id
        });
    });
}

//update an existing group
exports.updateGroup = (req, res) => {
    const id = req.params.id;
    Group.findByIdAndUpdate(id, {
        name: req.body.name,
        description: req.body.description
    }, {
        new: true
    }).then(group => {
        if (!group) {
            return res.status(404).send({
                message: 'No Group found with id ' + id
            });
        }
        res.send(group);
    }).catch(err => {
        return res.status(500).send({
            message: 'Error updating group with id ' + id
        });
    });

};