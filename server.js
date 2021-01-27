const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/property", (req, res) => {
  res.sendFile(__dirname + "/property.html");
});
app.get("/pages", (req, res) => {
  res.sendFile(__dirname + "/pages.html");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:3000`);
});
