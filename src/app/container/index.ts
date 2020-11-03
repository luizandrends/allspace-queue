import { container } from 'tsyringe';

import IMailProvider from '../providers/MailProvider/interfaces/IMailProvider';
import EtherealMailProvider from '../providers/MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from '../providers/MailTemplateProvider/interfaces/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from '../providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider)
);
