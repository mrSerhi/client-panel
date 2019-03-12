// 11,230.00 1,123.00 123,333.00
function formatNumber(num) {
  let numParse = Math.round(num).toFixed(2);
  const [firstNum, secondNum] = numParse.split(".");

  if (firstNum.length >= 5) {
    return `${firstNum.slice(0, firstNum.length - 3)},${firstNum.slice(
      firstNum.length - 3,
      firstNum.length
    )}.${secondNum}`;
  }
  return numParse;
}

export default formatNumber;
