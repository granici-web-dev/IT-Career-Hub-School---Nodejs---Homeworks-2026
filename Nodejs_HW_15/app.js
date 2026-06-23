import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3002;

// Обслуживание статических файлов из папки public
app.use(express.static("public"));

// Обработка WebSocket-соединений
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Получение сообщения от клиента
  socket.on("message", (msg) => {
    console.log("Message received:", msg);

    // Отправка подтверждения обратно клиенту
    socket.emit("messageConfirmation", `Server received: "${msg}"`);
  });

  // Обработка отключения пользователя
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
