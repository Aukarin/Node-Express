require('dotenv').config();
const express = require("express");
const app = express();
const port =  process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello index.js World");
});

app.listen(port, () => {
  console.log(`Example app Listening at http://localhost:${port}`);
});
