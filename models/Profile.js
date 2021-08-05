const mongoose = require("mongoose");

const ConfigSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  fieldValues: Array,
});

module.exports = mongoose.model("Config", ConfigSchema);
