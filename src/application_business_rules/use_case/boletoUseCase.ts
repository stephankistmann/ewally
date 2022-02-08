import {
  addDays,
  validateBarCode,
  getBarCode,
  getAmount,
  validateDigitableLine,
} from '../../frameworks_drivers/utils';
import { validateThreeFields } from '../../frameworks_drivers/utils/validateThreeFields';
import { validateFourFields } from '../../frameworks_drivers/utils/validateFourFields';

export default class BoletoUseCase {
  async getBoleto(digitableLine: string) {
    let barCode;
    let amount;
    let expFactor;
    let expirationDate;
    const lineLength = validateDigitableLine(digitableLine);

    if (lineLength === 47) {
      validateThreeFields(digitableLine);
      barCode = getBarCode(digitableLine, 47);
      validateBarCode(barCode, 47);
      amount = getAmount(digitableLine, 47);
      expFactor = barCode.slice(5, 9);
      const baseDate = new Date('10-07-1997');
      expirationDate = addDays(JSON.stringify(baseDate), Number(expFactor));

      return {
        amount,
        expirationDate,
        barCode,
      };
    } else {
      validateFourFields(digitableLine);
      barCode = getBarCode(digitableLine, 48);
      validateBarCode(barCode, 48);
      amount = getAmount(barCode, 48);

      return {
        barCode,
        amount,
      };
    }
  }
}
