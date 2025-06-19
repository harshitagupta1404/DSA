// Count number of digits in a number
function countDigit(n) {
    if (n === 0)  return 1;
    let ctr = 0;
    n = Math.abs(n);
    while (n > 0) {
        ctr++;
        n = Math.floor(n / 10);
    }
    return ctr;
}
let ctr = countDigit(474);
console.log(ctr);

// Palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = 0;
    let xCopy = x;
    while (x>0){
        rev = rev*10 + x%10;
        x = Math.floor(x/10);
    }
    return rev==xCopy;
};
