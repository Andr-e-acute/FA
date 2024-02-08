// var insert = function (array, rightIndex, value) {
//   var insertSpace = value;

//   for (let index = rightIndex; index >= -1; index--) {
//     console.log(array[index]);
//     if (index == -1) {
//       array[index + 1] = insertSpace;
//     }
//     if (array[index] > insertSpace) {
//       array[index + 1] = array[index];
//       console.log("Array after inserting arraryindex:  " + array);
//     } else {
//       console.log("else");
//       array[index + 1] = insertSpace;
//       return;
//     }
//   }
// };

// var insert = function (array, rightIndex, value) {
//   var i;
//   for (i = rightIndex; i >= 0 && array[i] > value; i--) {
//     array[i + 1] = array[i];
//     console.log("Array after inserting arraryindex:  " + array);
//   }
//   array[i + 1] = value;
//   console.log("Array after outside loop:  " + array);
// };

// var array = [3, 5, 7, 11, 13, 2, 9, 6];

// insert(array, 4, 2);
// console.log("Array after inserting 2:  " + array);
// //[2, 3, 5, 7, 11, 13, 9, 6]);
var insert = function (array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
    console.log("Array after inserting 2:  " + array);
  }
  array[j + 1] = value;
};

var insertionSort = function (array) {
  for (var i = 1; i < array.length; i++) {
    console.log(i);
    insert(array, i - 1, array[i]);
  }
};
var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
