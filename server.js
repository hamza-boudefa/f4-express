// 1. import express

const express=require('express')
const path=require('path')
const logger = require('./midlwre/logger')
// 2. create app
const app=express()
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.use(logger)
app.use(express.static(__dirname+'/public'))


// 3. PORT
const port=7000

// 4.listning
app.listen(port,(err)=>err? console.log(err):console.log(`app listing on ${port}`))