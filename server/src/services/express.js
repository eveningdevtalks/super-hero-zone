const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const config = require("../config");
const errorHandler = require("../middlewares/error-handler");
const apiRouter = require("../routes/api");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

// serve react app from www
app.use(express.static(path.resolve(__dirname, "../../../www")));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "../../../www/index.html"));
});

// app.use(errorHandler.handleNotFound);
app.use(errorHandler.handleError);

exports.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`);
      process.exit(-1);
    }

    console.log(`SuperHeroZone is running on ${config.port}`);
  });
};
