const Event = require("../../models/Event");

const createEventService = async (event) => {
  try {
    const newEvent = await Event.create(event);
    return newEvent;
  } catch (error) {
    return error;
  }
};

module.exports = createEventService;
