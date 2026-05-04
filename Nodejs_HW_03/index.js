import fs from "fs";

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.log("Error: File is not created");
  } else {
    console.log("File is created successfully!");
  }

  fs.readFile("info.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error: File is not readed");
    } else {
      console.log("File was readed successfully!", data);
    }
  });
});