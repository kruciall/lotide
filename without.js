const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1,arr2) {
  if (!eqArrays(arr1,arr2)) {
    console.log("These two Arrays are NOT equal"); //checks both arrays, if length is not equal = false
    return;
  } else {
    console.log("These two arrays are equal");
    return;
  }
};
// The Challenge: Implement without which will return a subset of a given array, removing unwanted elements.

// const without = function(source, itemsToRemove) {
//   let newArr = [];
//   for (let i = 0; i < Array.length; i++) {
//     for (let r = 0; r < itemsToRemove.length; r++) {
//       if (source[i] === itemsToRemove[r]) {
//         break;
//       }
//       if (itemsToRemove.length - 1 === r) {
//         newArr.push(source[i]);
//       }
//     }
//   }
//   return newArr;
// };


const without = function(source, itemsToRemove) {
  let removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedItems.push(source[i]);
    }
  }
  return removedItems;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [2, 1, "3"])); // => ["1", "2"]
console.log(without(["Hello", "Wong"], ["Hello"]))
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);