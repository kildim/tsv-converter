import {readFileSync} from 'fs';
import {CliCommandInterface} from '../interfaces/cli-command.interface.js';

class CliCommandVersion implements CliCommandInterface{
  readonly name: string = '--version';

  async execute(): Promise<void> {
    const version =this.readVersion();
    console.log(version);
  }

  private readVersion(): string {
    const PackageJsonContent =readFileSync('./package.json', 'utf-8');
    const Content = JSON.parse(PackageJsonContent);

    return Content.version;
  }
}

export  default CliCommandVersion;
