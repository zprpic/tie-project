const { getAllEventsService } = require("../../services/index");

const getAllEvents = async (req, res) => {
  const events = await getAllEventsService();
  return events;
};

module.exports = getAllEvents;
