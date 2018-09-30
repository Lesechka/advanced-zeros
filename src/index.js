module.exports = function getZerosCount(number, base) {
  let zeros = 0;


   function simpleMultipliers(x) {
       let j = 0;
       let i = 2;
       let arr = [];
       do {
           if (x % i === 0) {
               arr[j] = i;
               j++;
               x = x / i;
           }
           else {
               i++;
           }
       }
       while (i < x) ;
       arr[j] = i;
       return arr;
   }
           /*function arrayMax(arr) {
               return arr.reduce(function (p, v) {
                   return (p < v ? p : v);
               });
*/
               let maxMultiplier = Math.max(...(simpleMultipliers(base)));


               while (number > 0) {
                   number = Math.floor(number / maxMultiplier);
                   zeros += number;
               }
               return zeros;
}
