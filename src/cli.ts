#!/usr/bin/env node

import CliCommandsManager from './classes/cli-commands-manager.js';
import CliCommandHelp from './classes/cli-command-help.js';
import CliCommandVersion from './classes/cli-command-version.js';
import CliCommandConvert from './classes/cli-command-convert.js';
import CliCommandInput from './classes/cli-command-input.js';

const myManager = new CliCommandsManager();
myManager.registerCommands([
  new CliCommandHelp,
  new CliCommandVersion,
  new CliCommandConvert,
  new CliCommandInput
]);

myManager.processCommand(process.argv);
