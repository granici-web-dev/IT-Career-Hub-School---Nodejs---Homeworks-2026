import http from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

const server = http.createServer((req, res) => {
  const method = req.method;
  res.setHeader("Content-Type", "text/plain");

  if (method === "PUT") {
    res.statusCode = 200;
    res.end("The PUT request has been processed");
  } else if (method === "DELETE") {
    res.statusCode = 200;
    res.end("The DELETE query has been processed");
  } else {
    res.statusCode = 405;
    res.end("Method not allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
