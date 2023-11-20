import {FileReaderInterface} from '../../interfaces/file-reader.interface';
import {readFileSync} from 'fs';
import RecordType from '../../types/record-type';
import {CliCommandInterface} from '../../interfaces/cli-command.interface';
import {writeFile} from 'fs/promises';

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

  async execute(filename: string, targetFilename: string) {
    const convertedData: RecordType[] = this.read(filename)

    typeof targetFilename === "undefined" ? console.log(convertedData) : await writeFile(targetFilename, JSON.stringify(convertedData), 'utf-8')
  }
}

export default FileReader;
