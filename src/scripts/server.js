const express = require('express')
const app = express()
const port = 3001
const employeeData =  require('../stub/sample-data.json');

app.get('/search', function (req, res) {
    res.header("Content-Type",'application/json');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(employeeData); 
  })

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})