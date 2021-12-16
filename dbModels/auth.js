const Sequelize = require("sequelize");
const sequelize = require("../server/dbcontroller");

const auth = sequelize.define("auth", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.VARCHAR,
    allowNull: false,
  },
});

module.exports = auth;