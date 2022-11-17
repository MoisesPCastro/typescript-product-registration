import fs from 'fs';
import Handlebars from 'handlebars';
import { IParseMailTemplete } from './interfaceConfigEmail';

export class HandlebarsMailTemplate {
  public async parse({ file, variables }: IParseMailTemplete): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8'
    });
    const parseTemplate = Handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
