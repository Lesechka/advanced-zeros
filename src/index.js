module.exports = function getZerosCount(number, base) {
  let zeros = 0;


  function simpleMultipliers(x) {
      let j = 0;
      let i = 2;
      let arr = [];
      do {
        if (x === 2) {
          arr[j] = x;
        }
      else if ( x % i === 0) {
              arr[j] = i;
              j++;
              x = x / i;
          }
          else {
              i++;
          }
      }
      while (i < x);
      arr[j] = i;
      return arr;
  }
  let baseArray = simpleMultipliers(base);
let maxMultiplier = Math.max(...baseArray);
  let countMaxMultiplier = 0;
  for(let j = 0; j < baseArray.length; ++j){
      if(baseArray[j] === maxMultiplier)
          countMaxMultiplier++;
  }

console.log(maxMultiplier);
console.log(countMaxMultiplier);
  while (number > 0){
      number = Math.floor(number/maxMultiplier);
      zeros += number;
  }
  return Math.floor(zeros/countMaxMultiplier);
}
