import { getComments, parseFlags } from "./utils/helper"


const isDeveloping: boolean = true
const SLICE_FACTOR: number = isDeveloping ? 2 : 1

// Get arguments excluding default cli
const filteredArgs = process.argv.slice(SLICE_FACTOR)
const {flags, files} = parseFlags(filteredArgs)  

console.log(files)

