const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors("*"));
app.use(express.json());

const uraURL = "https://www.ura.gov.sg/Corporate/Guidelines/Circulars";
const scdfURL =
  "https://www.corenet.gov.sg/general/e-info/Circulars.aspx?startDate=22/05/2014&agency=66369&page=0";
const bcaURL =
  "https://www1.bca.gov.sg/about-us/news-and-publications/circulars";

// i think it would make more sense to not run this on an endpoint, but periodically. Maybe via a cronjob or via a timed process. 
// E.g. every 4 hours, scrape the ura website and store the results somewhere to be displayed on the FE
// Doing this every time you start your app is a very inefficient process. It takes very long to process and the data on the frontend would not be up to date.

app.get("/circulars/ura", (req, res) => {
  axios(uraURL)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const uraCircular = [];

      $(".horizontal-box", html).each(function () {
        const date = $(this)
          .find(".col-md-3.col-sm-3.col-xs-12.no-lr-padding")
          .find(".text")
          .text()
          .trim();
        const title = $(this)
          .find(".col-md-9.col-sm-9.col-xs-12.no-lr-padding")
          .find(".text")
          .text()
          .trim();
        const url = "ura.gov.sg" + $(this).find("a").attr("href");
        uraCircular.push({ date, title, url });
      });
      res.json(uraCircular);
    })
    .catch((err) => console.log(err));
});

app.get("/circulars/scdf", (req, res) => {
  axios(scdfURL)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const scdfCircular = [];

      $(".row.borderBotSilver", html).each(function () {
        const date = $(this).find(".f-right").find(".d-in").text();
        const title = $(this).find(".bold.color-333").text();
        const url = $(this).find("a").attr("href");
        scdfCircular.push({ date, title, url });
      });
      res.json(scdfCircular);
    })
    .catch((err) => console.log(err));
});

app.get("/circulars/bca", (req, res) => {
  axios(bcaURL)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const bcaCircular = [];

      $(".listItemWrap", html).each(function () {
        const date = $(this).find(".sfnewsMetaInfo.sfmetainfo").text();
        const title = $(this).find(".sfnewsTitle.sftitle").text().trim();
        const url = $(this).find("a").attr("href");
        bcaCircular.push({ date, title, url });
      });
      res.json(bcaCircular);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
