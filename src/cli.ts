import path from "path";
// Self imports
import { parseArguments } from "./parser";
import { createConfig } from "./files";

export async function cli(rawArgs: any) {
  const parsed = parseArguments(rawArgs);

  if (parsed.createConfig) {
    await createConfig();
    return;
  }

  console.log(parsed);
}
