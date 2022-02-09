import AppError from '../config/appError';
import { moduleEleven, moduleTen } from './';

export const validateBarCode = (code: string, type: number) => {
  let verificationDigit;

  if (type === 47) {
    const barCodeVerification = code[4];
    const barCode = code.slice(0, 4) + code.slice(5, 44);
    const toArray = Array.from(barCode);
    const stringArrayToNumberArray = toArray.map(Number);
    const reverseArray = stringArrayToNumberArray.reverse();
    verificationDigit = moduleEleven(reverseArray);

    if (verificationDigit !== Number(barCodeVerification)) {
      throw new AppError(
        'Invalid bar code verification digit',
        400,
        'Bar code verification digit error',
      );
    }
  } else {
    const barCodeVerification = Number(code[3]);

    const barCode = code.slice(0, 3) + code.slice(4, 44);

    const toArray = Array.from(barCode);
    const stringArrayToNumberArray = toArray.map(Number);
    const reverseArray = stringArrayToNumberArray.reverse();
    moduleTen(reverseArray, barCodeVerification);
  }

  return true;
};
