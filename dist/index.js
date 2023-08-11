#!/usr/bin/env node

// src/index.ts
import open from "open";
import readline from "readline";
import process from "process";
import pc from "picocolors";

// src/data.ts
var searchAddress = [
  "https://cn.bing.com/search?q=",
  "https://www.google.com/search?q=",
  "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="
];
var currentAddress = searchAddress[0];

// src/index.ts
import logSymbols from "log-symbols";
import inquirer from "inquirer";
var options = process.argv.slice(2);
undefinedCommand(options);
var searchEngine = currentAddress;
async function undefinedCommand(options2) {
  const optionsType = ["-h", "--help", "-u", "--use"];
  if (options2.length > 1) {
    console.log(logSymbols.warning, pc.red("unknown command! use -h to find help."));
    process.exit(0);
  }
  if (options2.length === 1 && !optionsType.includes(options2[0])) {
    console.log(logSymbols.warning, pc.red("unknown command! use -h to find help."));
    process.exit(0);
  }
}
if (options.includes("-u") || options.includes("--use")) {
  await inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "Choose Search Engine",
    choices: [
      "Google",
      "Bing",
      "Baidu"
    ]
  }]).then((res) => {
    selectClose(res.choice);
    process.exit();
  });
}
if (options.includes("-h") || options.includes("--help")) {
  welcome("h");
  console.log(`
ss           -    directly open default tab
se -u        -    select search engine 
se --use     -    select search engine
se -h        -    command list
se --help    -    command list
  `);
  info();
  process.exit();
}
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
(function() {
  rl.question(`
${pc.bgGreen(pc.bold(` search: `))} `, async function(res) {
    if (res) {
      await open(searchEngine + res);
    } else {
      await open("https:");
    }
    close();
    rl.close();
  });
})();
function welcome(type) {
  if (type === "h") {
    console.log(`${pc.bold(pc.blue("@windlil/se"))} ${pc.dim("fast search and open browser v0.0.1")}`);
  }
}
function info() {
  console.log(`${pc.magenta("GitHub repo: https://github.com/windlil/se")}`);
}
function close() {
  console.log("\n" + logSymbols.success, `${pc.bold(pc.yellow("success open!"))}`);
}
function selectClose(type) {
  console.log("\n" + logSymbols.success, `${pc.bold(pc.yellow(`success change ${type} search engine!`))}`);
}
