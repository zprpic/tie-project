const { createEventService } = require("../../services/index");

const createEvent = async (req, res) => {
  const event = await createEventService(req.body);
  //MISSING ERROR CHECKING
  return event;
};

module.exports = createEvent;
