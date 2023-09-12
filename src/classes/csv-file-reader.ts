import {FileReaderInterface} from '../interfaces/file-reader.interface.js';
import {readFileSync} from 'fs';
import iconv from 'iconv-lite';
const {decode} = iconv;

type RecordType = {[index: string]: string};

class CsvFileReader implements FileReaderInterface {
  constructor(public filename: string) {};
  private record: RecordType = {};

  read(): RecordType[] {
    const rawData = decode(readFileSync(this.filename),'win1251');
    let tableKeys: string[] = [];
    let tableRows: string[][] = [];
    let table = [];

    if(!rawData) {
      return [];
    }

    table = rawData.split('\r\n').filter((row) => row.trim() !== '').map((row) => row.split('\t'));
    tableKeys = table[0];
    tableRows = table.slice(1);
    return tableRows.map((row) => row.reduce((acc, cell, index) => {
      acc[tableKeys[index]] = cell;
      return acc;
    }, this.record));
  }
}

export default CsvFileReader;
