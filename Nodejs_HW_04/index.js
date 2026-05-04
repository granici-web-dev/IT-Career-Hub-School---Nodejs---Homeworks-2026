import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

fs.writeFile(process.env.FILENAME, "Hello world!", (err) => {
  if (err) {
    console.log("Error: File not found");
  } else {
    console.log("File created successfully!");
  }

  fs.readFile(process.env.FILENAME, "utf8", (err, data) => {
    if (err) {
      console.log("Error: File not found");
    } else {
      console.log(data);
    }
  });
});
