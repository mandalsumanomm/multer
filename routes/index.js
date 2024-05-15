var express = require('express');
var router = express.Router();
const upload = require('./multer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/upload', function (req, res, next) {
  res.render('upload');
});

//upload
router.post('/upload', upload.single('file'), (req, res, next) => {
  if (req.file) {
    console.log('File uploaded successfully');
    res.render('upload');
  } else {
    console.log('Something went wrong with the upload');
    res.status(500).send('Something went wrong with the upload');
  }
});

module.exports = router;
