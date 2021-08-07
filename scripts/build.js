#!/usr/bin/env node

const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const fs = require("fs").promises;

async function deletePreviousCompiledJs() {
  try {
    await fs.access("./dist");
    const isError = await fs.rm("./dist", { recursive: true, force: true });

    if (isError !== undefined) {
      console.log(isError);
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

async function deletePreviousCompiledTypes() {
  try {
    await fs.access("./types");
    const isError = await fs.rm("./types", { recursive: true, force: false });

    if (isError !== undefined) {
      console.log(isError);
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

// 'npm run build' should delete the previously transpiled Javascript and then run the Typescript compiler
deletePreviousCompiledJs();

deletePreviousCompiledTypes();

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
