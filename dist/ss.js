#!/usr/bin/env node

// src/ss.ts
import logSymbols from "log-symbols";
import open from "open";
import process from "process";
import pc from "picocolors";
var options = process.argv.slice(2);
if (options.length > 0) {
  console.log(logSymbols.warning, pc.red("ss don't have options"));
  process.exit(0);
}
(async function() {
  await open("https:");
})();
