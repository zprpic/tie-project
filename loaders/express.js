const express = require("express");
const server = express();
const cors = require("cors");

const router = require("../api/routes/createEvent");

server.use(cors());
server.use(express.json());
server.use("/events", router);

module.exports = server;
