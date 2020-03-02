
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
if (arguments.length === 0) {
  return arr;
}
  matrix.forEach(function(item, i) {
    if (!(i%2 == 0)) {
      arr.push(...matrix[i].reverse());
      console.log(arr);
    } else {
arr.push(...matrix[i]);
console.log(arr);
    }

  });

return arr;
}
