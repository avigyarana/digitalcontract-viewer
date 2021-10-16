const { DataTypes, Model } = require("sequelize");

import sequelize from "./connection";

class Article extends Model {}

Article.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
    },
    index: {
      allowNull: false,
      unique: false,
      type: DataTypes.INTEGER(11),
    },
    name: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING(80),
    },
    chapterId: {
      allowNull: false,
      unique: false,
      type: DataTypes.INTEGER(11),
    },
  },
  {
    // Other model options go here
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    sequelize, // We need to pass the connection instance
    modelName: "articles", // We need to choose the model name
  }
);

export default Article;
