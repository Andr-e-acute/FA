var factorial = function (n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};
console.log("endResult:" + factorial(6));
