const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

exec("npm install")
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
    return;
  });

exec("npm link")
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
    return;
  });

exec("npm run build")
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
    return;
  });
