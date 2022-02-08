export const getBarCode = (digitableLine: string, type: number) => {
  let barCode;
  if (type === 47) {
    barCode =
      digitableLine.slice(0, 4) +
      digitableLine[32] +
      digitableLine.slice(33, 47) +
      digitableLine.slice(4, 9) +
      digitableLine.slice(10, 20) +
      digitableLine.slice(21, 31);
  } else {
    barCode =
      digitableLine.slice(0, 11) +
      digitableLine.slice(12, 23) +
      digitableLine.slice(24, 35) +
      digitableLine.slice(36, 47);
  }

  return barCode;
};
