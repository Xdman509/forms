var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createBird', function(req,res, next){
  if (req.body.name === ''|| req.body.nickname === ''|| req.body.status===''){
    res.send('invalid request');
  }
  console.log(req.body.name);
  console.log(req.body.nickname);
  console.log(req.body.status);
  //save to database
  res.render('bird-created');
});

module.exports = router;
