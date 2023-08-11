import { welcome, info } from "./console"

export function handleHelp(options) {
  if (options.includes('-h') || options.includes('--help')) {
    welcome('h')
    console.log(`
ss           -    directly open default tab
se -u        -    select search engine 
se --use     -    select search engine
se -h        -    command list
se --help    -    command list
    `)
    info()
    process.exit()
  }
}