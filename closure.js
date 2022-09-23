const outer = function() {

  let number = 0;

  const myFunction = function(num) {
    number += num;
    console.log(number);
  };

  return myFunction;
};
