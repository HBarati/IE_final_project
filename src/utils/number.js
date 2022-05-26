export const nFormatter = (num) => {
  const lookup = [
    { value: 1e6, symbol: 'K' },
    { value: 1e9, symbol: 'M' },
    { value: 1e12, symbol: 'G' },
    { value: 1e15, symbol: 'T' },
    { value: 1e18, symbol: 'P' },
    { value: 1e21, symbol: 'E' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item ? `${(num / (item.value / 1000)).toFixed(0).replace(rx, '$1')}${item.symbol}` : '0';
};

export const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
