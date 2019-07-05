const searchController = require('../controllers/searchController');
const auth = require('../middleware/auth');

//search pms database by first or last name of person
module.exports = app => {
    app.get('/api/search/:searchString', auth.checkToken, searchController.search);
};