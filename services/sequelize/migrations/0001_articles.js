export const up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "articles",
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
      charset: "utf8",
    }
  );
};

export const down = (queryInterface) => queryInterface.dropTable("articles");
