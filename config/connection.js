require('dotenv').config();


// import the Sequelize constructor from the library
const Sequelize = require('sequelize');


// create connection to the db
const sequelize = process.env.JAWSDB_URL


  ? new Sequelize(process.env.JAWSDB_URL)

  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;