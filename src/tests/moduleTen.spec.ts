import AppError from '../frameworks_drivers/config/appError';
import { moduleTen } from '../frameworks_drivers/utils';

describe('moduleTen test suite', () => {
  test('moduleTen test, it should return true', () => {
    expect(moduleTen([2, 0, 0, 0, 0, 0, 0, 2, 6, 3, 8], 1, 1)).toBe(true);
  });

  test('moduleTen test, it should return an error informing verification digit is incorret', () => {
    let testError = new AppError(
      `Invalid verification digit of field: 1`,
      400,
      'Verification digit error',
    );

    expect(() => moduleTen([1, 1, 0, 0, 0, 9, 2, 1, 2], 2, 1)).toThrowError(
      testError as Error,
    );
  });
});
