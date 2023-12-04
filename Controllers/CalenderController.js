const express = require("express");
const router = express.Router();
const Event = require("../Model/Event");
const moment = require("moment");

router.post("/create-event", async (req, res) => {
  const { start, end, title } = req.body;
  const event = await Event.create({
    start,
    end,
    title,
  });
  res.send({ success: true, event });
});

router.post("/get-events", async (req, res) => {
  try {
    const events = await Event.find({
      start: {
        $gte: new Date(req.body.start),
        $lte: new Date(req.body.end),
      },
    });

    res.send({ success: true, events });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
