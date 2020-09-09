const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

//tugas 1. GET path '/home'yang menampilkan respon
app.get('/home', (request, response)=>{
    console.log('Hey!')
    response.send('Welcome to my first backend!')
})

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})

//tugas 2. POST path '/data' yang akan menampilkan data yang dikirim ke console.log
  app.post('/data',(req, res) => {
    console.log(req.body);      
    res.sendStatus(200);
  });

//tugas 3. POST path 'profile' yang akan menampilkan data yang dikirim ke console.log
  app.post('/login',(req, res) => {
      res.send(request.body);
  });