
export function getComments (file: string) {
   return file 
}

export function parseFlags (argv: string[]) {
    return {flags: argv.filter(arg => arg.slice(0, 2) === '--' || arg.slice(0, 1) === '-'), files: argv.filter(arg => arg)}
}