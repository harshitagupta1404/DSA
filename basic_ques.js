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
