import IParseMailTemplateDTO from '../dtos/IParseMailProviderDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
