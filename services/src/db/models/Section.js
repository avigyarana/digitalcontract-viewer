const { DataTypes, Model } = require("sequelize");

import sequelize from "./connection";

class Section extends Model {}

Section.init(
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
    articleId: {
      allowNull: false,
      unique: false,
      type: DataTypes.INTEGER(11),
    },
    text: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING(10000),
    },
    type: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING(10),
    },
    name: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING(50),
    },
  },
  {
    // Other model options go here
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    sequelize, // We need to pass the connection instance
    modelName: "sections", // We need to choose the model name
  }
);

export default Section;
