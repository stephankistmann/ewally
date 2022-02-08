import { Router } from 'express';
import BoletoController from '../../interface_adapters/controllers/BoletoController';

const boletoController: BoletoController = new BoletoController();

const routes = Router();

routes.get('/boleto/:code', boletoController.getBoleto);

export default routes;
