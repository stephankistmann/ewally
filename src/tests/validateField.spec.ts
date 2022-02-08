import AppError from '../frameworks_drivers/config/appError';
import { validateField } from '../frameworks_drivers/utils';

describe('validateField test suite', () => {
  test('validateField test of digitable line of 47 characters, it should return 47', () => {
    expect(validateField('84221010811', '9', 4, 11, 6)).toBe(true);
  });
  test('validateField test of digitable line of 48 characters, it should return true', () => {
    let testError = new AppError(
      `Invalid verification digit of field: 1`,
      400,
      'Verification digit error',
    );
    expect(() => validateField('212900011', '2', 1, 10)).toThrowError(
      testError as Error,
    );
  });
});
