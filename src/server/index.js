const dotenv = require('dotenv');
dotenv.config();

const FormData = require('form-data');

const fetch = require('node-fetch');

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));
app.use(express.json()) // for parsing application/json

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// API credentials
const api_key = process.env.API_KEY

app.post("/analyze", function (req, res) {
  const formdata = new FormData();
  formdata.append("key", api_key);
  formdata.append("url", req.body.url);
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  console.log(req.body)
  console.log(requestOptions);
  fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      res.send(data);
    })
});

