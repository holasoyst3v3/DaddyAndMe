const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()

const Sequelize = require("sequelize");


app.use(cors())
app.use(express.json())


app.use(express.static('client'))
app.use('/media', express.static(path.join(__dirname, '../media')))

//POST CODE START//
// 
// 
// 
// 



//POST CODE END//
// 
// 
// 
// 
//

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`SERVER INITIALIZING>>>>>> indexserver.js RUNNING ON PORT:${port}`))