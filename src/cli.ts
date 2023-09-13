#!/usr/bin/env node

import CliCommandsManager from './classes/cli-commands-manager.js';
import Help from './classes/cli-commands/help.js';
import Version from './classes/cli-commands/version.js';
import Convert from './classes/cli-commands/convert.js';
import Cp1251 from './classes/cli-commands/cp1251.js';

const myManager = new CliCommandsManager();
myManager.registerCommands([
  new Help,
  new Version,
  new Convert,
  new Cp1251
]);

myManager.processCommand(process.argv);
