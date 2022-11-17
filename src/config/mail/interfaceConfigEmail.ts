interface ITemplateVariable {
  [key: string]: string | number;
}

export interface IParseMailTemplete {
  file: string;
  variables: ITemplateVariable;
}
