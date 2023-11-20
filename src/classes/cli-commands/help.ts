import {CliCommandInterface} from '../../interfaces/cli-command.interface';

class Help implements CliCommandInterface{
  readonly name: string = '--help';

  async execute(): Promise<void> {
    const hint = `
    В качестве первого аргумента указывайте имя команды, вторым аргументом является путь к файлу-источнику, третьим путь к файлу назначения
      Образец: 
      tsv-converter ./source.tsv
    
    При вызове программы возможно применение следующих команд:
      --version -- вывод версии программы;
      --help -- вывод справки.
      --cp1251 -- импорт tsv файла в кодировке windows-1251 
    `
    console.log(hint);
  }
}

export  default Help;
