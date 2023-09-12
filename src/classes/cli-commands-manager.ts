import {CliCommandInterface} from '../interfaces/cli-command.interface.js';

type ParsedCommand = {
  [key: string]: string[];
}

class CliCommandsManager {
  private commands: {[propertyName: string]: CliCommandInterface} = {};
  private defaultCommand = '--convert';

  registerCommands(commandsList: CliCommandInterface[]): void {
    commandsList.reduce((acc, command) => {
    const cliCommand = command;
    acc[cliCommand.name] = cliCommand;
    return acc;
    }, this.commands)
  }

  getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  processCommand(argv: string[]): void {
    const parsedCommand = this.parseCommand(argv);
    const [commandName] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parsedCommand[commandName] ?? [];
    command.execute(...commandArguments);
  }

  private parseCommand(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedCommand);
  }
}

export default CliCommandsManager;
