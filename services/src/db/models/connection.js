import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "digital-contracts-main",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "password",
  {
    host: process.env.DB_HOST || "0.0.0.0",
    port: process.env.DB_PORT || "4999",
    dialect: "mysql",
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
    operatorsAliases: false,
  }
);

export default sequelize;
