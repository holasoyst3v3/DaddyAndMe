const Sequelize = require("sequelize");
const sequelize = require("../server/dbcontroller");

const post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  post: {
    type: Sequelize.VARCHAR(255),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync()

module.exports = post;

user input to bodyobj => axios backend