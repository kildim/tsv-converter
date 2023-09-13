import {FileReaderInterface} from '../../interfaces/file-reader.interface';
import {readFileSync} from 'fs';
import RecordType from '../../types/record-type';
import {CliCommandInterface} from '../../interfaces/cli-command.interface';

abstract class FileReader implements FileReaderInterface, CliCommandInterface {
  abstract decode(rawData: Buffer): RecordType[];
  abstract readonly name: string;

  read(filename: string): RecordType[] {
    let rawData = readFileSync(filename);

    if (!rawData) {
      return [];
    }

    return this.decode(rawData);
  }

  execute(filename: string): void {
    console.log(this.read(filename))
  }
}

export default FileReader;
