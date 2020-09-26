// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
// "nestedFunction" can access "internal" because "internal" is within the local or function scope of "myFunction".

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(total){
  let sum = [];
  for (let i = 1; i<total+1; i++){
    sum.push(i);
    console.log(sum)
  }
  return Object.values(sum).reduce((acc, val) => acc + val);
}
console.log(summation(4))
