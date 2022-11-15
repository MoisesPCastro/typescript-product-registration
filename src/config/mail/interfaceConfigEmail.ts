interface ITemplateVariable {
  [key: string]: string | number;
}

export interface IParseMailTemplete {
  template: string;
  variable: ITemplateVariable;
}
