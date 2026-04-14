import { explainCode, formatJSON } from "./utils.js";

const command = process.argv[2];

if (!command) {
  console.log("Usage: node index.js <command>");
  process.exit(0);
}

switch (command) {
  case "explain":
    console.log(explainCode("function add(a,b){return a+b;}"));
    break;

  case "format":
    console.log(formatJSON('{"name":"Moeez","age":20}'));
    break;

  default:
    console.log("Unknown command");
}
