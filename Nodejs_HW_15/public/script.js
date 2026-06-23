const socket = io();

const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");

// Отправка сообщения на сервер
sendButton.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (msg) {
    socket.emit("message", msg);
    messageInput.value = "";
  }
});

// Отправка по Enter
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});

// Получение подтверждения от сервера
socket.on("messageConfirmation", (confirmation) => {
  const div = document.createElement("div");
  div.className = "message";
  div.textContent = confirmation;
  messages.appendChild(div);
});
