import { Router } from 'express';

import SendMailController from './app/controllers/SendMailController';

const routes = Router();

routes.post('/mail/send', SendMailController.sendMail);

export default routes;
