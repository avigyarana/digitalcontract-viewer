export const up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "sections",
    {
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
      charset: "utf8",
    }
  );
};

export const down = (queryInterface) => queryInterface.dropTable("sections");
