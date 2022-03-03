export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formateIntNum = (strNumber: string): string => {
  const number = +strNumber;

  const symbols: { value: number; symbol: string }[] = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" }
  ];

  const filteredSymbol = symbols.find(({ value }) => {
    return number >= value;
  });

  if (filteredSymbol) {
    const floatedNum = (number / filteredSymbol?.value).toFixed(1);
    return `${floatedNum}${filteredSymbol?.symbol}`;
  }

  return strNumber;
};
