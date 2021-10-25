const express = require("express");
const router = express.Router();

const { routeHandler } = require("./helpers/index");

const getAllEvents = require("./routes/getAllEvents");
const createEvent = require("./routes/createEvent");

router.route("/").get(routeHandler(getAllEvents));

router.route("/createEvent").post(routeHandler(createEvent));

module.exports = router;
