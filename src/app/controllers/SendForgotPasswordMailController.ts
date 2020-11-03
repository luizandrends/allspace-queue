import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordMailService from '../services/SendForgotPasswordMailService';

class SendForgotPasswordMailController {
  public async sendMail(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, token } = request.body;

    const sendForgotPasswordMailService = container.resolve(
      SendForgotPasswordMailService
    );

    await sendForgotPasswordMailService.execute({
      name,
      email,
      token,
    });

    return response.status(200).json({ success: 'Mail sent' });
  }
}

export default SendForgotPasswordMailController;
