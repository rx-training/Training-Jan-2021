const express = require('express');
const app = express();
const router = express.Router();

router.use(function (req, res, next) {
    console.log('Hii1')
    next('router');
  })
  
  router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })
  
  router.get('/user/:id', function (req, res, next) {
    if (req.params.id === '0') next('route')
    else next()
  }, function (req, res, next) {
    console.log('regular')
  })
  
  router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id)
    console.log('special')
  })
  
  app.use('/', router)
  app.use('/admin', router, function (req, res) {
    console.log('Admin');
  });

  app.listen(3000);