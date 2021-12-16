const Sequelize = require("sequelize");
const sequelize = require("../server/dbcontroller");

const dads = sequelize.define("dads", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.VARCHAR,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync()

module.exports = dads;