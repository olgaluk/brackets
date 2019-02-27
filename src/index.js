module.exports = function check(str, bracketsConfig) {
  const pairsBrackets = bracketsConfig;
  const strParam = str;
  let strArray = strParam.split('');

  for (let i = 0; i < pairsBrackets.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
     while ((strArray[j] === pairsBrackets[i][0]) &&  (strArray[j+1] === pairsBrackets[i][1])) {
      strArray.splice(j, 2);
      j = 0;
      i = 0;
     }
    }
  }

  return !strArray.length;
}
