import FileReader from '../abstract/file-reader.js';
import iconv from 'iconv-lite';
import RecordType from '../../types/record-type';
const {decode: convert} = iconv;

class Cp1251 extends FileReader {
  readonly name: string = '--cp1251';

  decode(rawData: Buffer): RecordType[] {
    const record: RecordType = {};
    const decodedData = convert(rawData,'win1251');
    let tableKeys: string[] = [];
    let tableRows: string[][] = [];
    let table = [];

    table = decodedData.split('\r\n').filter((row) => row.trim() !== '').map((row) => row.split('\t'));
    tableKeys = table[0];
    tableRows = table.slice(1);
    return tableRows.map((row) => row.reduce((acc, cell, index) => {
      acc[tableKeys[index]] = cell;
      return acc;
    }, record));
  }
}

export default Cp1251;
