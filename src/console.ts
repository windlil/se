import pc from 'picocolors'
import logSymbols from 'log-symbols'
import { getVersion } from './getVersion'

export function welcome(type: string) {
  if (type === 'h') {
    console.log(`${pc.bold(pc.blue('@windlil/se'))} ${pc.dim(`fast search and open browser v${getVersion()}`)}`)
  }
}

export function info() {
  console.log(`${pc.magenta('GitHub repo: https://github.com/windlil/se')}`)
}

export function close() {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow('success open!'))}`)
}

export function selectClose(type: string) {
  console.log('\n' + logSymbols.success, `${pc.bold(pc.yellow(`success select ${type} search engine!`))}`)
}

export function unknownTip() {
  console.log(logSymbols.warning, pc.red("unknown command! use -h to find help."))
}