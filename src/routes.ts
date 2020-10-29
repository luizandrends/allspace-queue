import { Router } from 'express';

const routes = Router();

routes.post('/mail/send', (request, response) => {
  return response.json({ ok: true });
});

export default routes;
