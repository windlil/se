#!/usr/bin/env node
import open from 'open'
import readline from 'readline'
import process from 'process'
import pc from 'picocolors'
import { currentAddress } from './data'
import logSymbols from 'log-symbols'
import inquirer from 'inquirer'

const options:string[] = process.argv.slice(2)

undefinedCommand(options)

let searchEngine = currentAddress

function undefinedCommand(options: string[]) {
  const optionsType = ['-h', '--help', '-u', '--use']
  if (options.length > 1) {
    console.log(logSymbols.warning, pc.red("unknown command! use -h to find help."))
    process.exit(0)
  }
  if (options.length === 1 && !optionsType.includes(options[0])) {
    console.log(logSymbols.warning, pc.red("unknown command! use -h to find help."))
    process.exit(0)
  }
}

// if (options.includes('-u') || options.includes('--use')) {
//   inquirer.prompt([{
//     type: 'list',
//     choices: ["Google", "Bing", "Baidu"]
//   }]).then((res) => {
//     console.log(res)
//     selectClose()
//     process.exit()
//   })
// }


if (options.includes('-h') || options.includes('--help')) {
  welcome('h')
  console.log(`
ss          -    directly open default tab
se -u        -    select search engine 
se --use     -    select search engine
se -h        -    command list
se --help    -    command list
  `)
  info()
  process.exit()
}


welcome()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

;(function () {
  rl.question(`\n${pc.bgGreen(pc.bold(` search: `))} `,async function(res){
    if (res) {
      await open(searchEngine + res)
    } else {
      await open('https:')
    }
    close()
    rl.close()
  })
})()

function welcome(type: string = 'default') {
  if (type === 'default') {

  } else {
    console.log(`${pc.bold(pc.blue('@windlil/se'))} ${pc.dim('fast search and open browser v0.0.1')}`)
  }
}

function info() {
  console.log(`${pc.magenta('GitHub repo: https://github.com/windlil/se')}`)
}

function close() {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow('success open!'))}`)
}

function selectClose() {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow('success change search engine!'))}`)
}