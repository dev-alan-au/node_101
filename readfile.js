const fs = require("fs");

try {
  const data = fs.readFileSync("./assets/readme.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
