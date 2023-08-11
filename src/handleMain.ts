import readline from 'readline'
import fs from 'fs'
import pc from 'picocolors'
import open from 'open'
import { close } from './console'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let searchMethodName: string, searchMethod: number, currentAddress: number

export async function handleMain(options, dataPath, searchAddress) {
  if (options.length === 0) {
    ;(async () => {
      fs.readFile(dataPath, (_, res) => {
        const data = res.toString()
        currentAddress = JSON.parse(data).current ?? 0
        searchMethod = searchAddress[currentAddress]
        if (currentAddress === 0) {
          searchMethodName = 'Google'
        } else if (currentAddress === 1) {
          searchMethodName = 'Bing'
        } else {
          searchMethodName = 'Baidu'
        }
        ;(function () {
          rl.question(`\n${pc.bgGreen(pc.bold(` ${searchMethodName}: `))} `,async function(target){
            if (target) {
              open(searchMethod + target)
            } else {
              await open('https:')
            }
            close()
            rl.close()
          })
        })()
      })
    })()
  }
}


