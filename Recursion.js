// You need to 
// 1. generate the recursion formula 
// 2. add the final stop condition

// Sum of first n numbers
let total = sum(7);
function sum(n){
  if(n===0)
    return 0;
  return n+sum(--n)
}
console.log(total);

// Sum of elements of array
const arr=[1,2,3,4,5,8,9,8];
function sum(index){
  if(index===0){
    return arr[index];
  }
  return arr[index]+sum(--index);
}
let total = sum(arr.length-1);
console.log(total);

// Sum of all odd numbers in an array
const arr=[1,2,3,4,5,6,8,6,7];
function sum(n){
  let isOdd = arr[n]%2!==0;
  if (n===0){
    return isOdd ? arr[0] : 0;
  }
  return isOdd ? arr[n]+sum(n-1) : sum(n-1);
}
console.log(sum(arr.length-1));

// Factorial of a number
function factorial(n){
  if(n===1)
    return 1;
  return n*factorial(n-1);
}
console.log(factorial(6))
