const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApiDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
  wind: {
    type: String,
    required: true
  },
}, { timestamps: true });

const ApiData = mongoose.model('ApiData', ApiDataSchema);

module.exports = ApiData;