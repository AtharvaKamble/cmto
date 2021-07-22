import * as fse from "fs-extra";
import path from "path";
import * as cp from "child_process";
import { promisify } from "util";

const exec = promisify(cp.exec);

/**
 * @description creates config files when user provides the --init flag
 * @param source path to what files need to be copied
 * @param destination path to where files need to be copied
 */
export async function createConfig() {
  const { stdout: filesInDirectory } = await exec("ls -a");

  const configFileName = "commento.config.js";
  if (filesInDirectory.search(configFileName) !== -1) {
    console.log("Commento already initialzed!");
    return;
  }

  const { stdout: nodePath } = await exec("which node");

  const nodeModulesPath = nodePath
    .split(path.sep)
    .splice(0, nodePath.split(path.sep).length - 2)
    .join(path.sep);

  const src: string = path.join(
    nodeModulesPath,
    "lib",
    "node_modules",
    "commento",
    "templates",
    "init"
  );
  const dest: string = process.cwd();

  try {
    await fse.copy(src, dest);
    console.log("Commento initialzed!");
  } catch (error) {
    console.log(error);
  }
}
