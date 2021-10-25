const server = require("./express");
const { database, port } = require("./config");
const connectDB = require("./connect");

const connect = () => {
  connectDB(database);
};

const app = () => {
  server.listen(port, () => {
    console.log(`
    ######################################
    Server listening on port: ${port}
    ######################################`);
  });
};

module.exports = {
  connect,
  app,
};
