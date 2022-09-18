#!/usr/bin/env node

import { logger, LogLevel } from "./Util.js";
import { nMarkets } from "./lyra.js";

import { data } from "./J.js";
import { program } from "commander";
function main(argv: string[]) {
  program.option("-v, --verbose", "show debug log");

  program.parse(argv);
  const options = program.opts();

  if (options.verbose) console.log(options);
  data();
  logger.setLogLevel(LogLevel.ERROR);
  logger.log("This is the text");
  data();
  logger.error("This is an error");
  data();
  logger.setLogLevel(LogLevel.WARN);
  logger.log("This is the text");
  data();
  logger.error("This is an error");
  data();
  nMarkets();
}
main(process.argv);
