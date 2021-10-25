const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Event must have a name"],
  },
  description: {
    type: String,
    required: [true, "Event must have a description"],
  },
  by: {
    type: String,
    required: [true, "Event must have a creator"],
  },
});

module.exports = mongoose.model("Event", EventSchema);
