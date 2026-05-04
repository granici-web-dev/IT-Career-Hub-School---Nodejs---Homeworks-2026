import EventEmitter from "events";
const emitter = new EventEmitter();

emitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

const sendMessage = (username, message) => {
  emitter.emit("message", username, message);
};

sendMessage("Alice", "Hello world!");
sendMessage("Bob", "Hi there!");
sendMessage("Alex", "Nice to meet you!");