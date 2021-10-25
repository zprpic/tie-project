const Event = require("../../models/Event");

const getAllEventsService = async () => await Event.find({});

module.exports = getAllEventsService;
