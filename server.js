/**
 * This is the main server file for the Ecommerce Back End application.
 * It sets up the Express server, imports models, and syncs the Sequelize models to the database.
 * The server listens on the specified port for incoming requests.
 */


const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Import your models
const Category = require('./models/Category');
// Add more model imports as needed

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes bc duh
app.use(routes);

// Sync sequelize models to the database
sequelize.sync({ force: false }) .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Unable to sync database:', error);
  });