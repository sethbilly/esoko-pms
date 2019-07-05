const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const auth = require('./middleware/auth');

// connect to mongoose to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true
    }).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to Esoko PMS! People Management System."
    });
});
app.post('/auth/login', auth.login);
require('./routes/personRoutes')(app);
require('./routes/groupRoutes')(app);
require('./routes/searchRoutes')(app);
app.listen(keys.port);