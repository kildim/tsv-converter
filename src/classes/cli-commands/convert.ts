import {CliCommandInterface} from '../../interfaces/cli-command.interface';

class Convert implements CliCommandInterface{
  readonly name = '--convert';

  async execute(): Promise<void> {
    console.log('CONVERTING ...')
  }
}

export default Convert;
