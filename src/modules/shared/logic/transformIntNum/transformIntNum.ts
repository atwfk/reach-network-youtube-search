export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formateIntNum = (strNumber: string): string => {
  const number = +strNumber;
  const billion = 1_000_000_000;
  const million = 1_000_000;
  const thousand = 1_000;

  if (number > billion) {
    const floatedNum = (number / billion).toFixed(1);

    return `${floatedNum}B`;
  }

  if (number > million) {
    const floatedNum = (number / million).toFixed(1);

    return `${floatedNum}M`;
  }

  if (number > thousand) {
    const floatedNum = (number / thousand).toFixed(1);

    return `${floatedNum}K`;
  }

  return strNumber;
};
