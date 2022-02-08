import AppError from '../frameworks_drivers/config/appError';
import { validateDigitableLine } from '../frameworks_drivers/utils';

describe('validateDigitableLine test suite', () => {
  test('validateDigitableLine test of digitable line of 47 characters, it should return 47', () => {
    expect(
      validateDigitableLine('21290001192110001210904475617405975870000002000'),
    ).toBe(47);
  });
  test('validateDigitableLine test of digitable line of 48 characters, it should return true', () => {
    expect(
      validateDigitableLine('846700000017435900240209024050002435842210108119'),
    ).toBe(48);
  });

  test('validateDigitableLine test of digitable line of 50 characters, it should throw an error saying line length is incorrect', () => {
    let testError = new AppError(
      `Incorrect digitable line length: 50, it should be 47 or 48 characters long`,
      400,
      'Digitable line length error',
    );

    expect(() =>
      validateDigitableLine(
        '84670000001743590024020902405000243584221010811900',
      ),
    ).toThrowError(testError as Error);
  });

  test('validateDigitableLine test of digitable line of 46 characters, it should throw an error saying line length is incorrect', () => {
    let testError = new AppError(
      `Incorrect digitable line length: 46, it should be 47 or 48 characters long`,
      400,
      'Digitable line length error',
    );

    expect(() =>
      validateDigitableLine('8467000000174359002402090240500024358422101081'),
    ).toThrowError(testError as Error);
  });

  test('validateDigitableLine test of digitable line of non-number characters, it should throw an error saying only numbers are allowed', () => {
    let testError = new AppError(
      'Invalid characters, only numbers allowed',
      400,
      'Digitable line characters error',
    );

    expect(() =>
      validateDigitableLine('846700000017bd5900240209024050002435842210a08119'),
    ).toThrowError(testError as Error);
  });
});
