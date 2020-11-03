import { Request, Response } from 'express';

class SendMailController {
  public async sendMail(
    request: Request,
    response: Response
  ): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default new SendMailController();
