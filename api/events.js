const express = require("express");
const router = express.Router();

const routeHandler = require("./helpers/route-handler");

const createEvent = require("./routes/createEvent");

router.route("/createEvent").post(routeHandler(createEvent));

module.exports = router;
