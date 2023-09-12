import {CliCommandInterface} from '../interfaces/cli-command.interface.js';

class CliCommandHelp implements CliCommandInterface{
  readonly name: string = '--help';

  async execute(): Promise<void> {
    const hint = `
    В качестве первого аргумента указывайте путь к файлу-источнику, вторым аргументом является путь к файлу-назначению.
      Образец: 
      csv-to-json ./source.csv ./destination.json
    
    При вызове программы возможно применение следующих ключей:
      --version -- вывод версии программы;
      --help -- вывод справки.
      --import -- импорт tsv файла 
    `
    console.log(hint);
  }
}

export  default CliCommandHelp;
