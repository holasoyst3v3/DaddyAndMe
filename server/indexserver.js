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

// const inventory = ['greeting card', 'wagon', 'pancakes', 'lightsabers', 'star destroyers', 'warthogs', 'AC-130']

// app.get('/api/inventory', (req, res) => {
//     // console.log(req)
//     if (req.query.item){
//         const filteredItems =  inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
//         res.status(200).send(filteredItems)
//     } else {
        
//         res.status(200).send(inventory)
//    }
// })

// app.get('/api/inventory/:index', (req, res) => {
//     res.status(200).send(inventory[+req.params.index])
// })

//POST CODE END//
// 
// 
// 
// 
//

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`SERVER INITIALIZING>>>>>> indexserver.js RUNNING ON PORT:${port}`))