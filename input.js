const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require('./constants');
let connections;
const handleUserInput =
  ("data",
  input => {
    if (input === "\u0003") {
      process.exit();
    } else if (input === MOVE_UP_KEY) {
      connections.write("Move: up");
    } else if (input === MOVE_LEFT_KEY) {
      connections.write("Move: left");
    } else if (input === MOVE_RIGHT_KEY) {
      connections.write("Move: right");
    } else if (input === MOVE_DOWN_KEY) {
      connections.write("Move: down");
    } else if (input === "j") {
      connections.write("Say: 2fast4u");
    } else if (input === "k") {
      connections.write("Say: HEHEHE");
    }
  });
const setupInput = function(conn) {
  connections = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
