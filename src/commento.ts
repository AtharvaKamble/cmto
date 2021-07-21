import { getComments, parseFlags } from "./utils/helper";

const isDeveloping: boolean = true;

// Get arguments excluding default cli
const { flags, files } = parseFlags(process.argv);

export function cli(args: any) {
  console.log(args);
}
