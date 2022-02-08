import AppError from '../config/appError';

export const validateDigitableLine = (code: string) => {
  const lineLength = code.length;

  if (lineLength < 47 || lineLength > 48) {
    throw new AppError(
      `Incorrect digitable line length: ${lineLength}, it should be 47 or 48 characters long`,
      400,
      'Digitable line length error',
    );
  }

  const reg = /^\d+$/;

  const checkIfNumbersOnly = reg.test(code);

  if (!checkIfNumbersOnly) {
    throw new AppError(
      'Invalid characters, only numbers allowed',
      400,
      'Digitable line characters error',
    );
  }

  return lineLength;
};
