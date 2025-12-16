// Approach 1 - using built in functions
// Time complexity - O(2n) - split and trim both have complexity n as they loop through the string
// Space complexity - O(n) - creates and array after splitting
const s = "   fly me   to   the moon  "
const tr = s.trim(" ");
console.log(tr)
const sp = tr.split(" ");
console.log(sp)
console.log(sp[sp.length-1])

// Approach 2
// Time complexity - O(n)
// Space complexity - O(1)
var lengthOfLastWord = function(s) {
    let i=s.length-1;
    let ctr=0;
    while(i>=0){
        if(s[i]!==" "){
            ctr++;
            i--;
        } 
        else if(ctr>0){
            break;
        }
        else
            i--;
    }
    return ctr;
};
