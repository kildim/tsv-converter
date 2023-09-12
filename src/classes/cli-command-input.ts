import {CliCommandInterface} from '../interfaces/cli-command.interface';
import CsvFileReader from './csv-file-reader.js';

class CliCommandInput implements CliCommandInterface {
  readonly name: string = '--import';

  execute(filename: string): void {
    const fileReader = new CsvFileReader(filename);
    console.log(fileReader.read())
  }

}

export default CliCommandInput;
