import arg from "arg";
import { isEmpty } from "lodash";
const packageInfo = require("../../package.json");

export function parseArguments(rawArgs: any) {
  const parsedArgs = arg(
    {
      "--init": Boolean,
      //
      "--yes": Boolean,
      "-y": "--yes",
      //
      "--help": Boolean,
      "-h": "--help",
      //
      "--version": Boolean,
      "-v": "--version",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    createConfig: parsedArgs["--init"] || false,
    skipPrompt: parsedArgs["--yes"] || false,
    help: parsedArgs["--help"] || false,
    project: {
      version: parsedArgs["--version"] || false,
    },
  };
}
