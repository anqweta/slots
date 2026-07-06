/*export const calcMoneyWin = (currentBet, currentMult) => {
  return currentBet * currentMult;
}; */

export const calcMoneyWin = (currentBet, countSame, SYMBOLS) => {
  let maxKey = null;
  let maxValue = 0;
  let currentMult;

  for (const [icon, count] of countSame) {
    if (count > maxValue) {
      maxValue = count;
      maxKey = icon;
    }
  }

  console.log("НОМЕР ІКОНКИ " + maxKey);
  if (countSame.size === 1) {
    currentMult = SYMBOLS[maxKey].firstMult;
    console.log("Ви вийграли, ваш множник ПРИ 3 ІКОНКАХ: " + currentMult);
  } else {
    currentMult = SYMBOLS[maxKey].secondMult;
    console.log("Ви вийграли, ваша множник ПРИ 2 ІКОНАХ: " + currentMult);
  }
  const moneyWin = currentBet * currentMult;
  return { moneyWin, currentMult };
};
