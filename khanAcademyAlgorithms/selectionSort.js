var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }

  return minIndex;
};

var selectionSort = function (array) {
  for (var currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
    var currentMin = indexOfMinimum(array, currentIndex);
    swap(array, currentIndex, currentMin);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log(array);
var array2 = [-2, 0, 499, 0, 3, 1, 99, 2];
selectionSort(array2);
console.log(array2);
