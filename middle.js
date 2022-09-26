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

module.exports = middle;