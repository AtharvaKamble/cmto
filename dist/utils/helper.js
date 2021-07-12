"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFlags = exports.getComments = void 0;
function getComments(file) {
    return file;
}
exports.getComments = getComments;
function parseFlags(argv) {
    return { flags: argv.filter(function (arg) { return arg.slice(0, 2) === '--' || arg.slice(0, 1) === '-'; }), files: argv.filter(function (arg) { return arg; }) };
}
exports.parseFlags = parseFlags;
