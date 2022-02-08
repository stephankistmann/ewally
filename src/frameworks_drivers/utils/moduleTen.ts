import { checkEven } from '.';
import AppError from '../config/appError';

export const moduleTen = (
  array: number[],
  vd: number,
  fieldNumber?: number,
) => {
  console.log(array, vd, fieldNumber);

  const reducedValue = array.reduce(
    (prev: number, current: number, index: number) => {
      const isIndexEven = checkEven(index);

      let result = null;

      if (isIndexEven) {
        result = current * 2;
      } else {
        result = current * 1;
      }

      if (result > 9) {
        const resultArr = result.toString().split('');

        result = Number(resultArr[0]) + Number(resultArr[1]);
      }

      return prev + result;
    },
    0,
  );

  const modulus = reducedValue % 10;

  let dac = 10 - modulus;

  if (dac === 10) {
    dac = 0;
  }

  if (!fieldNumber && dac === Number(vd)) {
    return dac;
  } else if (!fieldNumber && dac !== Number(vd)) {
    throw new AppError(
      `Invalid general verification digit`,
      400,
      'Field number validation error',
    );
  }
  if (dac === Number(vd)) {
    return true;
  } else {
    throw new AppError(
      `Invalid verification digit of field: ${fieldNumber}`,
      400,
      'Field number validation error',
    );
  }
};
