/**
 * Duck Persistence Module for Lake Cleaner Admin Project
 * Handles the persistence of ducks in MongoDB.
 */

const mongoose = require('mongoose');

// Define the schema for the duck
const duckSchema = new mongoose.Schema({
  name: String,
  color: String
});

// Create the Duck model using the schema
const Duck = mongoose.model('Duck', duckSchema);

module.exports = Duck;

