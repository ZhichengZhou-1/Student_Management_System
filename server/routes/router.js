const express = require('express');
const route = express.Router();
const services = require('../services/render');

route.get('/', services.homeRoutes); // set route to index page (front page) using a seperate exported render file 


route.get('/add-user', services.add_user); // set route to add user page using a seperate exported render file

route.get('/update-user', services.update_user); // set route to updaate user page using a seperate exported render file

module.exports = route;