const cors = require("cors");
const express = require("express");
const request = require("request");
require("dotenv").config();

// URA credentials
const accessKey = process.env.URA_ACCESS_KEY;
const token = process.env.URA_TOKEN;

const PORT = 3000;
const app = express();

// enable CORS access to this server
app.use(cors("*"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// URA API Call
app.get("/planning", (req, res) => {
  request.get(
    {
      url: "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Planning_Decision&last_dnload_date=24/03/2022",
      headers: {
        AccessKey: `${accessKey}`,
        Token: `${token}`,
        // "Access-Control-Allow-Origin": "*",
      },
      json: true,
    },
    (error, response) => {
      if (error) {
        return res.send("Error Occurred");
      }
      res.send(response);
    },
  );
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
