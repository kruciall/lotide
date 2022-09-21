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

// CHALLENGE Implement middle which will take in an array and return the middle-most element(s) of the given array.



//for arrays with odd number of elements, an array containing a single middle element should be returned.
// ACTUAL FUNCTION
const middle = function(array) {
  let middleElement = [];
  //for arrays with one or two elements, there is no middle. RETURN EMPTY ARRAY
  if (array.length === 1 || array.length === 2) {
    return middleElement;
  //for arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else if (array.length % 2 === 0) {
    let mid1 = array.length / 2; 
    let mid2 = mid1 - 1;
    middleElement.push(array[mid2]); //grabbing the arrays middle elements to pushing to the empty array
    middleElement.push(array[mid1]);
    return middleElement;
  } else {
    //For arrays with odd number of elements, an array containing a single middle element should be returned.
    let mid = Math.floor(array.length / 2);
    middleElement.push(array[mid]);
    return middleElement;
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1]));
console.log(middle([1,2]));
// TEST CODE
// ...