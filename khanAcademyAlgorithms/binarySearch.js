console.log("test");
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  let Index = 0;
  while (min < max) {
    Index++;
    console.log("max:" + max);
    console.log("min:" + min);
    console.log("guess" + guess);

    guess = Math.floor((max + min) / 2);

    console.log("newsGuee" + guess);
    console.log("value of guess is " + array[guess]);
    if (array[guess] === targetValue) {
      console.log("result is: " + array[guess]);
      return guess;
    } else if (array[guess] < targetValue) {
      console.log("arr " + array[guess] + " smaller then " + targetValue);
      min = guess + 1;
    } else {
      console.log("arr " + array[guess] + " bigger then " + targetValue);
      max = guess - 1;
    }
  }

  return -1;
};

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

var result = doSearch(primes, 73);
/* 
// Solution for the challenge
// Returns either the index of the location in the array,
//   or -1 if the array did not contain the targetValue 
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count=0;
while (min <= max) {
    count++;
    guess = Math.floor((max + min) / 2);
    if (array[guess] === targetValue) {
         println(guess);
         println(count);
      return guess;
    } 
    else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
 println(guess);
  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 11), 4);
Program.assertEqual(doSearch(primes, 2), 0);
*/
