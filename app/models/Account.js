const Sequelize = require("sequelize");
const sequelize = require("../db");

const Account = sequelize.define("accouont", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // 자동 생성
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  vendor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 1,
      max: 14,
    },
  },
});

module.exports = Account;
