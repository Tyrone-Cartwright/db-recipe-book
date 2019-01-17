const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const cors = require("cors");
const morgan = require("morgan");

const knexConfig = require("./knexfile.js");

const server = express();

// connect to database
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());
server.use(morgan("short"));
server.use(cors());

server.get("/", (req, res) => {
  res.send("api working");
});

const port = 3300;
server.listen(port, function() {
  console.log(`Web API Listening on http://localhost:${port}`);
});
