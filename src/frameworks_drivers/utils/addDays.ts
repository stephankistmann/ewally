export const addDays = (date: string, days: number) => {
  const splitDate = date.split('T');
  const slicedDate = splitDate[0].slice(1, 11);

  let result = new Date(slicedDate);

  result.setDate(result.getDate() + days);

  const stringifiedResult = JSON.stringify(result);

  const splitResult = stringifiedResult.split('T');

  return splitResult[0].slice(1, 11);
};
