import { Request, Response } from 'express';
import BoletoUseCase from '../../application_business_rules/use_case/boletoUseCase';
import AppError from '../../frameworks_drivers/config/appError';

/**
 * @class BoletoController
 * @classdesc Controller de manipulação de boletos.
 * @author Stephan Kistmann Jacob
 */
export default class BoletoController {
  private boletoUseCase: BoletoUseCase = new BoletoUseCase();

  /**
   * @method getBoleto
   * @description Método responsável por validar e retornar dados do boleto
   * @param  {req} - Request
   * @param  {res} - Response
   * @returns {result} - Dados retornados
   */
  public getBoleto = async (req: Request, res: Response) => {
    const { code } = req.params;
    try {
      const result = await this.boletoUseCase.getBoleto(code);
      res.status(200).json(result);
    } catch (e) {
      if (e instanceof AppError) {
        res.status(e.statusCode).json(e);
      }
    }
  };
}
