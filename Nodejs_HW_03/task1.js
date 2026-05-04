import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log("Error: Folder is not created");
  } else {
    console.log("Folder is created successfully!");
  }

  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.log("Error: Folder is not deleted");
    } else {
      console.log("Folder is deleted successfully!");
    }
  });
});



