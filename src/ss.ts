#!/usr/bin/env node
import open from 'open'
import process from 'process'
import fs from 'fs'
import { dataPath, searchAddress } from './data'


function handleOptions(options: string[]) {
  const target = options.join(' ')
  return target
}


async function handleSearch(target) {
  let currentAddress
  fs.readFile(dataPath, async (err, res) => {
    const data = res.toString()
    currentAddress = JSON.parse(data).current ?? 0
    const search = `${searchAddress[currentAddress]}${target}`
    await open(search)
  })
}

const options:string[] = process.argv.slice(2)

if (options.length > 0) {
  const target = handleOptions(options)
  await handleSearch(target)
}

;(async function () {
  if (options.length > 0) {
    return
  }
  await open('https:')
})()

