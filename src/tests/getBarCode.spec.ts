import { getBarCode } from '../frameworks_drivers/utils';

describe('getBarCode test suite', () => {
  test('It should return "21299758700000020000001121100012100447561740" for digitable line 21290001192110001210904475617405975870000002000 of length 47)', () => {
    expect(
      getBarCode('21290001192110001210904475617405975870000002000', 47),
    ).toBe('21299758700000020000001121100012100447561740');
  });
  test('It should return "83620000002292600481001435309300100190421076" for digitable line 836200000021292600481009143530930013001904210760 of length 48)', () => {
    expect(
      getBarCode('836200000021292600481009143530930013001904210760', 48),
    ).toBe('83620000002292600481001435309300100190421076');
  });
});
