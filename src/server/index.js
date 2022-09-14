const dotenv = require('dotenv');
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

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

// import import { handleSubmit } from "./js/formHandler";
import { articleURL } from "./js/formHandler";

// API credentials
const mcapi = new meaningcloud({
  application_key: process.env.API_KEY
});

// API REQUEST
// const formdata = new FormData();
// formdata.append("key", process.env.API_KEY);
// formdata.append("url", articleURL); // GET URL FROM INPUT
// formdata.append("lang", "en");

// const requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// const response = fetch(
//   "https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then((response) => ({
//     status: response.status,
//     body: response.json(),
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch((error) => console.log("error", error));
