"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./utils/helper");
var isDeveloping = true;
var SLICE_FACTOR = isDeveloping ? 2 : 1;
// Get arguments excluding default cli
var filteredArgs = process.argv.slice(SLICE_FACTOR);
var _a = helper_1.parseFlags(filteredArgs), flags = _a.flags, files = _a.files;
console.log(files);
