const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  title: String,
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
