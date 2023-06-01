/**
 * Main entry point for the Lake Cleaner Admin backend.
 * Handles the server setup and routing for the application.
 */

const http = require('http');
const mongoose = require('mongoose');

// Import the Duck model
const Duck = require('./duck');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database.');

    // Create the server
    const server = http.createServer(async (req, res) => {
      if (req.url === '/duck' && req.method === 'GET') {
        try {
          // Query the database to get the duck data
          const duck = await Duck.findOne({ name: 'Duck 1' });

          if (duck) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`
              <h1>${duck.name}</h1>
              <p>Color: ${duck.color}</p>
            `);
          } else {
            console.error('The duck was not found.');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('The duck was not found.');
          }
        } catch (error) {
          console.error('Error while searching for the duck:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Error while searching for the duck.');
        }
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
      }
    });

    const port = 3000;
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error while connecting to the database:', error);
  });

