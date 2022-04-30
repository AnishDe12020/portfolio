const process = require("process");
const crypto = require("crypto");

const main = () => {
  const hashedPassword = crypto
    .createHash("sha256")
    .update(process.argv[2])
    .digest("hex");
  console.log(process.argv[2]);
  console.log("Hashed:", hashedPassword);
};

main();
