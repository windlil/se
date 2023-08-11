import inquirer from "inquirer"
import fs from 'fs'
import { selectClose } from "./console"

export  async function handleUse(options, dataPath) {
  if (options.includes('-u') || options.includes('--use')) {
    await inquirer.prompt([{
      type: "list",
      name: 'choice',
      message: 'Choose Search Engine',
      choices: [
        "Google", "Bing", "Baidu"
      ]
  }],).then(async (res) => {
      const choice = res.choice
      let current
      if (choice === 'Google') {
        current = 0
      } else if (choice === 'Bing') {
        current = 1
      } else {
        current = 2
      }
      await fs.writeFile(dataPath, `{ "current": ${current} }`,() => {
        selectClose(choice)
        process.exit(0)
      })
    })
  }
}