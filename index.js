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

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

// enable CORS access to this server
app.use(cors("*"));

app.use(express.json());

//import routers
const mapsRouter = require("./routers/mapsRouter");
const usersRouter = require("./routers/usersRouter");
const commentsRouter = require("./routers/commentsRouter");
const checklistsRouter = require("./routers/checklistsRouter");

app.use("/maps", mapsRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);
app.use("/checklists", checklistsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

// clean file, nice