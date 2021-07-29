const mongoose = require("mongoose");

const RowSchema = mongoose.Schema({
  x: {
    type: String,
    required: false,
  },
  y: {
    type: String,
    required: false,
  },
  n: {
    type: String,
    required: false,
  },
});

const ProfileSchema = mongoose.Schema({
  wykonczenie: {
    type: String,
    required: false,
  },
  szerokosc: {
    type: String,
    required: false,
  },
  dlugosc: {
    type: String,
    required: false,
  },
  ilWkladek: {
    type: String,
    required: false,
  },
  dlWkladek: {
    type: String,
    required: false,
  },
  noga: {
    type: String,
    required: false,
  },
  blat: Array,
  wkladka: Array,
  podbitkaA: Array,
  podbitkaB: Array,
  podbitkaW: Array,
  skrzyniaA: Array,
  skrzyniaB: Array,
});

module.exports = mongoose.model("Profile", ProfileSchema);
