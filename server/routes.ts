import express from 'express';
import { ResponsibleController } from './src/controllers/responsibleController';

const routes = express.Router();

const responsibleController = new ResponsibleController();

routes.get('/', (request, response) => {
  return response.json({message: 'Hello World'});
})

routes.get('/responsible', responsibleController.show);
routes.post('/responsible', responsibleController.create);

export default routes;