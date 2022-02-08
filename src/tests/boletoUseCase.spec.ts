import BoletoUseCase from '../application_business_rules/use_case/boletoUseCase';

describe('BoletoUseCase test suite', () => {
  test('If boleto is valid with a 47 digit digitable line, this test should return amount, expirationDate and barCode', async () => {
    let b = new BoletoUseCase();

    const data = await b.getBoleto(
      '21290001192110001210904475617405975870000002000',
    );

    expect(data).toStrictEqual({
      amount: '20.00',
      expirationDate: '2018-07-16',
      barCode: '21299758700000020000001121100012100447561740',
    });
  });
  test('If boleto is valid with a 48 digit digitable line, this test should return amount and barCode', async () => {
    let b = new BoletoUseCase();

    const data = await b.getBoleto(
      '836200000021292600481009143530930013001904210760',
    );

    expect(data).toStrictEqual({
      amount: '229.26',
      barCode: '83620000002292600481001435309300100190421076',
    });
  });
});
