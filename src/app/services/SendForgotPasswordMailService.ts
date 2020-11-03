import { inject, injectable } from 'tsyringe';
import path from 'path';

import IMailProvider from '../providers/MailProvider/interfaces/IMailProvider';

interface IRequest {
  name: string;
  email: string;
  token: string;
}
@injectable()
class SendForgotPasswordMailService {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  public async execute({ name, email, token }: IRequest): Promise<void> {
    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'templates',
      'forgot-password.hbs'
    );

    const parsedLink = `${process.env.FRONT_HOST}/reset?token=${token}`;

    await this.mailProvider.sendMail({
      to: {
        name,
        email,
      },
      subject: '[Allspace] Password recovery',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          userName: name,
          resetPasswordURL: parsedLink,
        },
      },
    });
  }
}

export default SendForgotPasswordMailService;
