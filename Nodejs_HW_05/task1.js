import http from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.headers.authorization) {
    res.statusCode = 200;
    res.end("Authorization header received");
  } else {
    res.statusCode = 401;
    res.end("Unauthorized");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
