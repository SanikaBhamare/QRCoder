const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// this is the home page
app.get("/", (req, res) => {
  res.send("QRCoder");
});

app.listen(3000, () => {
  console.log("server lsitening on port 3000");
});
