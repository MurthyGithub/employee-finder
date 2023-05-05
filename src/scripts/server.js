const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001
const employeeData =  require('../stub/sample-data.json');

app.use(cors());

app.get('/employees', function (req, res) {
     res.json(employeeData.employees); 
  })

app.get('/company', function (req, res) {
   res.json(employeeData.companyInfo); 
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})