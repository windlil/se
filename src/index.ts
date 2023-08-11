#!/usr/bin/env node
import open from 'open'
import readline from 'readline'
import process from 'process'
import pc from 'picocolors'
import { currentAddress } from './data'
import logSymbols from 'log-symbols'
import inquirer from 'inquirer'

const options:string[] = process.argv.slice(2)

const searchAddress = [
  'https://cn.bing.com/search?q=',
  'https://www.google.com/search?q=',
  'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
]

const searchMethod = searchAddress[currentAddress]

undefinedCommand(options)

async function undefinedCommand(options: string[]) {
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

if (options.includes('-u') || options.includes('--use')) {
  await inquirer.prompt([{
    type: "list",
    name: 'choice',
    message: 'Choose Search Engine',
    choices: [
      "Google", "Bing", "Baidu"
    ]
}],).then((res) => {

    selectClose(res.choice)
    process.exit()
  })
}


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


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

;(function () {
  rl.question(`\n${pc.bgGreen(pc.bold(` search: `))} `,async function(res){
    if (res) {
      await open(searchMethod + res)
    } else {
      await open('https:')
    }
    close()
    rl.close()
  })
})()

function welcome(type: string) {
  if (type === 'h') {
    console.log(`${pc.bold(pc.blue('@windlil/se'))} ${pc.dim('fast search and open browser v0.0.1')}`)
  }
}

function info() {
  console.log(`${pc.magenta('GitHub repo: https://github.com/windlil/se')}`)
}

function close() {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow('success open!'))}`)
}

function selectClose(type: string) {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow(`success select ${type} search engine!`))}`)
}