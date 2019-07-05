const personController = require('../controllers/personController');
const auth = require('../middleware/auth');

module.exports = app => {
    app.get('/api/persons', auth.checkToken, personController.getPersons);
    app.get('/api/person/:id', auth.checkToken, personController.getPerson);
    app.post('/api/persons', auth.checkToken, personController.addPerson);
    app.put('/api/persons/:id', auth.checkToken, personController.updatePerson);
    app.delete('/api/persons/:id', auth.checkToken, personController.deletePerson);

    app.post('/api/persons/groups', auth.checkToken, personController.personToGroup);
};