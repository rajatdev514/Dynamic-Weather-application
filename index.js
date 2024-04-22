const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "UTF-8");

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=5af5d880414335928831ed40dc3a6b49")
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        // JSON format converted to object format
        const arrData = [objData];
        // object format converted to array format
        console.log(arrData);
        // to particular data you can write console.log(arrData[0].main.temp)
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);

        console.log("end");
      });
  }
});

server.listen(8000, '127.0.0.1'); 
// 127.0.0.1 is our local host
