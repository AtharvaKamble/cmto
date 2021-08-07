const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

const isWindows = process.platform === "win32";
