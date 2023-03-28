var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
  //res.render('computation', { title: 'Maheshwar Punyam Anand' });
  
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.abs(x);
let y2=Math.acos(y);
let y3=Math.sinh(x);
  res.send('Math.abs() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.acos() applied to '+y+' is '+y2+"<br>"+'Math.sinh()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.abs(x);
  let y2=Math.acos(x);
  let y3=Math.sinh(x);

  res.send('Math.pow() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.sign() applied to '+y+' is '+y2+"<br>"+'Math.tanh()  applied to '+x+' is'+y3);
}
});

module.exports = router;