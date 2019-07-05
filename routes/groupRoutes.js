const groupController = require('../controllers/groupController');
const auth = require('../middleware/auth');

module.exports = app => {

    app.get('/api/group/:id', auth.checkToken, groupController.getGroup);
    app.post('/api/groups', auth.checkToken, groupController.addGroup);
    app.put('/api/groups/:id', auth.checkToken, groupController.updateGroup);

};