//This is a possibility, not needed for mvp but took 2 seconds to make

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Post extends Model {}
Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Post_content: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  genre_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "genre",
      key: "id",
    },
  },
});