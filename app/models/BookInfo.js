const Sequelize = require("sequelize");
const sequelize = require("../db");

const BookInfo = sequelize.define("book_info", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // 자동 생성
    allowNull: false,
    unique: true,
  },
  ISBN: { type: Sequelize.BIGINT, allowNull: false },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pubdate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  img_url: { type: Sequelize.STRING, allowNull: true },
});

module.exports = BookInfo;
