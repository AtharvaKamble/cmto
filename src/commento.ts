import arg from "arg";
import { isEmpty } from "lodash";
const pack = require("../package.json");

function parseArguments(rawArgs: any) {
  const args = arg(
    {
      "--yes": Boolean,
      "--help": Boolean,
      "--version": Boolean,
      "--init": Boolean,
      "-y": "--yes",
      "-h": "--help",
      "-v": "--version",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  if (isEmpty(rawArgs.slice(2)))
    return "See cmto -h OR cmto --help for more information.";

  if (args["-v"] || args["--version"]) return pack.version;

  if (args["--init"]) return "Creating commento.config.js...";

  return {
    skipPrompt: args["--yes"]
      ? "This will cause you to skip to introduction"
      : false,
    help: args["--help"] ? "Usage: cmto [--flag] OR cmto [-f]" : false,
  };
}

export function cli(args: any) {
  const parsed = parseArguments(args);

  console.log(parsed);
}
