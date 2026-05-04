import fs from "fs";

export const logMessage = (message) => {
  fs.appendFile("log.txt", message + "\n", (err) => {
    if (err) {
      console.error("Error occured when writing file:", err);
      return;
    } else {
      console.log("File was successfully created!");
    }
  });
};
