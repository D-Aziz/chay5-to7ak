const mongoose = require("mongoose");

const schema = mongoose.Schema;
const gameSchema = new schema({
  Name: String,
  Rating: { type: Number, default: 0 },
  Genre: String,
  Developer: String,
  Release_Date: String,
  Image: String,
  Price: String,
  Description: String,
});
const Game = mongoose.model("game", gameSchema);

module.exports = Game;
