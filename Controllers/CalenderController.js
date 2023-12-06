const express = require("express");
const router = express.Router();
const Event = require("../Model/Event");
const moment = require("moment");

router.post("/create-event", async (req, res) => {
  const { start, end, title } = req.body;

  // Truncate seconds and milliseconds
  const truncatedStart = new Date(start).toISOString();
  const truncatedEnd = new Date(end).toISOString();

  // Check if an event with the same truncated start and end already exists
  const existingEvent = await Event.findOne({
    start: truncatedStart,
    end: truncatedEnd,
  });

  if (existingEvent) {
    return res.status(400).send({
      success: false,
      message: "Event with the same start and end already exists.",
    });
  }

  const event = await Event.create({
    start,
    end,
    title,
  });
  res.send({ success: true, event });
});

router.get("/get-events", async (req, res) => {
  try {
    const events = await Event.find();

    res.send({ success: true, events });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
