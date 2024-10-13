var express = require('express');
var cors = require('cors');
const multer = require('multer')
const mongoose = require('mongoose')
require('dotenv').config({path: './sample.env'})
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true })
const Schema = mongoose.Schema

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
app.use((req,res,next)=>{
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})
const upload = multer({storage: multer.memoryStorage()})

app.post("/api/fileanalyse", upload.single('upfile'),  (req,res)=>{
  const file = req.file
  if(!file) return res.status(400).json({ error: 'No file uploaded'   
  })
  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});