import Handlebars from 'handlebars';
import { IParseMailTemplete } from './interfaceConfigEmail';

export class HandlebarsMailTemplate {
  public async parse({
    template,
    variable
  }: IParseMailTemplete): Promise<string> {
    const parseTemplate = Handlebars.compile(template);

    return parseTemplate(variable);
  }
}
