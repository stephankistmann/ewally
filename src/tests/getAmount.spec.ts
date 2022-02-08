import { getAmount } from '../frameworks_drivers/utils';

describe('getAmount test suite', () => {
  test(`getAmount test with type 47 and value 00190500954014481606906809350314337370000000100, should return ${1.0}`, () => {
    expect(
      getAmount('00190500954014481606906809350314337370000000100', 47),
    ).toBe('1.00');
  });
  test(`getAmount test with type 48 and value 83620000002292600481001435309300100190421076, should return ${229.26}`, () => {
    expect(getAmount('83620000002292600481001435309300100190421076', 48)).toBe(
      '229.26',
    );
  });
});
