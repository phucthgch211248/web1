var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  let year =2024;
  let university = "Greenwich";
  res.render('index', { hn:"Hà Nội",vn: "Việt Nam"});
})

router.get('/demo', (reg, res)=>{
  res.render('demo', {hn:"Hà Nội",vn: "Việt Nam"});
})

module.exports = router;
