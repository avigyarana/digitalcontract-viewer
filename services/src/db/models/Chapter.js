const { DataTypes, Model } = require("sequelize");

import sequelize from "./connection";

class Chapter extends Model {}

Chapter.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
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
  },
  {
    // Other model options go here
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    sequelize, // We need to pass the connection instance
    modelName: "chapters", // We need to choose the model name
  }
);

export default Chapter;
