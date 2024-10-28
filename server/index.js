const express = require("express");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();
app.use(cors());
app.use(express.json());

// this is the home page
app.get("/", (res) => {
  res.send("QRCoder server");
});

//setting up the genrate route
app.post("/generate", (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send("Enter a URL");
  }

  QRCode.toDataURL(url, (err, qrCode) => {
    if (err) {
      return res.status(500).send("Failed to generate qrcode");
    }
    res.json({ qrCode });
  });
});

app.listen(3000, () => {
  console.log("server lsitening on port 3000");
});
