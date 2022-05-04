"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");



const { startDatabase } = require("./models/db");
const authenticationRouter = require("./api/authentication/routes");
const reflectionRouter = require("./api/reflections/routes");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use("/api/v1", authenticationRouter);
app.use("/api/v1", reflectionRouter);

startDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
  });
});

function name(params) {

}