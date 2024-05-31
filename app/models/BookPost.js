const Sequelize = require("sequelize");
const sequelize = require("../db");
const BookInfo = require("./BookInfo");
const Account = require("./Account");

const BookPost = sequelize.define("book_post", {
  Key: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // 자동 생성
    allowNull: false,
    unique: true,
  },
  account_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Account,
      key: "id",
    },
  },
  rental_place: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rental_state: {
    type: Sequelize.ENUM("available", "rented", "booked"),
    allowNull: false,
  },
  available_rental_day: {
    type: Sequelize.TINYINT,
    allowNull: false,
    validate: {
      min: 1,
      max: 14,
    },
  },
});

BookPost.belongsTo(BookInfo, { foreignKey: "book_info_id" });

module.exports = BookPost;
