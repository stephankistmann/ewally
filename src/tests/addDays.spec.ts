import { addDays } from '../frameworks_drivers/utils';

describe('addDays test suite', () => {
  test('should return "2018-07-16" for addDays(JSON.stringify(`1997-10-07T02:00:00.000Z`), 7587)', () => {
    expect(addDays(JSON.stringify('1997-10-07T02:00:00.000Z'), 7587)).toBe(
      '2018-07-16',
    );
  });
});
