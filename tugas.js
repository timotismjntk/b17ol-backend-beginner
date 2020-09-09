const express = require('express')

const app = express()

//tugas 1. GET pat '/home'yang menampilkan respon
app.get('/home', (request, response)=>{
    console.log('Hey!')
    response.send('Welcome to my first backend!')
})

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})