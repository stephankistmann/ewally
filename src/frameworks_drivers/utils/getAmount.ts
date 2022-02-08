export const getAmount = (value: string, type: number) => {
  let slicedValue;

  if (type === 47) {
    slicedValue = value.slice(38, 47);
  } else {
    slicedValue = value.slice(4, 15);
  }

  const parsedValue = parseInt(slicedValue, 10);

  return (parsedValue / 100).toFixed(2);
};
