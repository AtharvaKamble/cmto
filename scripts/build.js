#!/usr/bin/env node

const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const fs = require("fs").promises;

const isWindows = process.platform === "win32";

async function deletePreviousCompiledJs() {
  const isError = await fs.rm("./dist", { recursive: true, force: true });

  if (isError !== undefined) {
    console.log(isError);
    return;
  }
}

if (isWindows) {
  deletePreviousCompiledJs();

  exec("tsc")
    .then((data) => console.log(data))
    .catch((error) => {
      if (
        error?.stderr.includes(
          "'tsc' is not recognized as an internal or external command"
        )
      ) {
        console.log(
          "You need to install typescript. Try npm install typescript -g"
        );
        return;
      }
      console.log(error);
      return;
    });
}
