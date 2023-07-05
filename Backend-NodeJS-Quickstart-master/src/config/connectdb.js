const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("huy", "root", null, {
  host: "localhost",
  dialect:
    "mysql", 
    logging:false/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection DB successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports=connectDB
