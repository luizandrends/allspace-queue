import { Router } from 'express';

import SendForgotPasswordMailController from './app/controllers/SendForgotPasswordMailController';

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

const routes = Router();

routes.post('/forgot/password', sendForgotPasswordMailController.sendMail);

export default routes;
