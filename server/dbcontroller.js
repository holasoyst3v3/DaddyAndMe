// 
// 
// 
// 
// 
//DB CODE BGEIN

const sequelize = new Sequelize ("daddydb", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;

//DB CODE END
//
//
//
//
//
//
app.listen(5050, () => console.log('SERVER INITIALIZING>>>>>> dbcontroller.js RUNNING ON PORT:5050'))