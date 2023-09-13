import {FileReaderInterface} from '../interfaces/file-reader.interface.js';
import {readFileSync} from 'fs';
import iconv from 'iconv-lite';
const {decode} = iconv;

type RecordType = {[index: string]: string};

class CsvFileReader implements FileReaderInterface {
  constructor(public filename: string) {};
  private record: RecordType = {};

  read(): RecordType[] {
    let rawData = readFileSync(this.filename);

    if(!rawData) {
      return [];
    }

    return this.decodeCp1251(rawData);
  }

  private decodeCp1251(data: Buffer): RecordType[] {
    const decodedData = decode(data,'win1251');
    let tableKeys: string[] = [];
    let tableRows: string[][] = [];
    let table = [];

    table = decodedData.split('\r\n').filter((row) => row.trim() !== '').map((row) => row.split('\t'));
    tableKeys = table[0];
    tableRows = table.slice(1);
    return tableRows.map((row) => row.reduce((acc, cell, index) => {
      acc[tableKeys[index]] = cell;
      return acc;
    }, this.record));
  }
}

export default CsvFileReader;
