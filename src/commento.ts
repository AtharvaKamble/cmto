import arg from "arg";
import { isEmpty } from "lodash";
import { parseArguments } from "./arguments/index";
const pack = require("../package.json");

export function cli(rawArgs: any) {
  const parsed = parseArguments(rawArgs);
  console.log(parsed);
}
