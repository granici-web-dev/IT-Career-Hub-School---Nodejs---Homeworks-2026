import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

const server = http.createServer((req, res) => {
  try {
    throw new Error("Error");
  } catch (error) {
    fs.appendFile(
      "errors.log",
      `${moment().format("YYYY-MM-DD : HH-mm-ss")} - ${error.message}\n`,
      (err) => {
        if (err) console.log("Failed to write log");
      },
    );

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
