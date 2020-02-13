const express = require('express');
const userRouter = require('./users/userRouter')

const server = express();

server.use("/api/users", logger, userRouter);
server.use("/api/users/:id", logger, userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl} `);

  next();
}

module.exports = server;
