const cors = require("cors");
const express = require("express");
// const request = require("request");
require("dotenv").config();
const { auth } = require("express-oauth2-jwt-bearer");
const bodyParser = require("body-parser");

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

// // URA credentials
// const accessKey = process.env.URA_ACCESS_KEY;
// const token = process.env.URA_TOKEN;

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

// enable CORS access to this server
app.use(cors("*"));

app.use(express.json());

// URA API Call does not work!
// app.get("/planning", (req, res) => {
//   request.get(
//     {
//       url: "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Planning_Decision&last_dnload_date=24/03/2022",
//       headers: {
//         AccessKey: `${accessKey}`,
//         Token: `${token}`,
//         // "Access-Control-Allow-Origin": "*",
//       },
//       json: true,
//     },
//     (error, response) => {
//       if (error) {
//         return res.send("Error Occurred");
//       }
//       console.log(response.body);
//       res.send(response);
//     },
//   );
// });

//import routers
const mapsRouter = require("./routers/mapsRouter");
const usersRouter = require("./routers/usersRouter");

app.use("/maps", mapsRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
