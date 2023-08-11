#!/usr/bin/env node
import process from 'process'
import { dataPath, searchAddress } from './data'
import { handleUndefined } from './handleUndefined'
import { handleUse } from './handleUse'
import { handleHelp } from './handleHelp'
import { handleMain } from './handleMain'

const options:string[] = process.argv.slice(2)

// handle undefined command
// if error: process.exit
handleUndefined(options)

// handle -u
handleUse(options, dataPath)

//handle -h
handleHelp(options)

//handle se
handleMain(options, dataPath, searchAddress)

