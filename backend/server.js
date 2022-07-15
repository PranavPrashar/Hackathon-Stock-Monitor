const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const cors = require("cors");
app.use(cors());

//https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=VvQ6M6BtKVkcScCxjr9FGdhHC8pVds5oB300oftw
app.get("/", function (req, res) {
  console.log("Home Directory Reached");
  res.status(200).json("Home Directory Reached");
});

app.get("/:stockName", function (req, res) {
  // Search bar -> apple ==> /:apple ==> take the stock name and then search the json data.json for the name and find the stock ticker name
  // axios request to stock ticker name
  const theStockName = req.params.stockName;

  const stockDataFile = JSON.parse(fs.readFileSync("./data/data.json"));

  const foundStockName = stockDataFile.find((stock) => {
    return stock.name === theStockName;
  });

  const { name, stockTicker } = foundStockName;

  axios
    .get(
      `https://api.stockdata.org/v1/data/quote?symbols=${stockTicker}&api_token=VvQ6M6BtKVkcScCxjr9FGdhHC8pVds5oB300oftw`
    )
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    });
});

app.listen("5050", function () {
  console.log("Server running on 5050");
});
