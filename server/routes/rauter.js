const express = require('express');
const route= express.Router();

const servises = module.require('../services/render');
const controlle = module.require('../controller/controller')

route.get('/',servises.articals);

route.get('/UpdateArtical',servises.updateArtical);
route.get('/readMore',servises.readMore);
route.get('/readArtical', servises.readMore);
route.get('/addArtical',servises.addArtical);

route.get('/readMore',servises.readMore);


//API HTTP Methods 

route.post('/api/blog', controlle.create);
route.get('/api/blog', controlle.find);
route.get('/api/blog/:id', controlle.readArtical);
route.put('/api/blog/:id', controlle.update);
route.post('/api/blog/:id', controlle.update);
route.delete('/api/blog/:id', controlle.delete);


module.exports = route