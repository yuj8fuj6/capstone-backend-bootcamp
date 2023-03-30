const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const uraURL = "https://www.ura.gov.sg/Corporate/Guidelines/Circulars";
const scdfURL =
  "https://www.scdf.gov.sg/home/fire-safety/downloads/acts-codes-regulations";
const bcaURL =
  "https://www1.bca.gov.sg/about-us/news-and-publications/circulars";

axios(uraURL)
  .then((res) => {
    const html = res.data;
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
    console.log(uraCircular);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
