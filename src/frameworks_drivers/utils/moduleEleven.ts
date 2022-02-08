import AppError from '../config/appError';

export const moduleEleven = (
  array: number[],
  vd?: number,
  fieldNumber?: number,
) => {
  let counter = 2;

  const reducedValue = array.reduce((prev: number, current: number) => {
    const multipliedAmount = current * counter;

    if (counter === 9) {
      counter = 2;
    } else {
      counter++;
    }

    return multipliedAmount + prev;
  }, 0);

  const modulus = reducedValue % 11;

  let dac = 11 - modulus;

  if (dac === 0 || dac === 10 || dac === 11) {
    dac = 1;
  }

  if (!vd && dac) {
    return dac;
  }

  if (vd && dac === Number(vd)) {
    return dac;
  } else {
    throw new AppError(
      `Invalid verification digit of field: ${fieldNumber}`,
      400,
      'Verification digit error',
    );
  }
};
