// ***
// ***
// ***   n=3
function star(n) {
    for (let i = 0; i < n; i++){
        let row = "";
        for (let j = 0; j < n; j++){
            row += '* ';
        }
        console.log(row);
    }
}
star(8)

// *
// **
// ***
// ****    n=4
function star(n) {
    for (let i = 0; i < n; i++){
        let row = "";
        for (let j = 0; j <= i; j++){
            row += '* ';
        }
        console.log(row);
    }
}
star(4)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
function star(n) {
    for (let i = 1; i <= n; i++){
        let row = "";
        for (let j = 1; j <= i; j++){
            row += `${j} `;
        }
        console.log(row);
    }
}
star(5)

// 1
// 22
// 333
// 4444
function star(n) {
    for (let i = 1; i<=n; i++){
        let row = "";
        for (let j = 1; j <= i; j++){
            row += i;
        }
        console.log(row);
    }
}
star(7)

// 12345
// 1234
// 123
// 12
// 1
function star(n) {
    for (let i = n; i>0; i--){
        let row = "";
        for (let j = 1; j <= i; j++){
            row += j;
        }
        console.log(row);
    }
}
star(5)

// ****
// ***
// **
// *
function star(n) {
    for (let i = n; i>0; i--){
        let row = "";
        for (let j = 1; j <= i; j++){
            row += '*';
        }
        console.log(row);
    }
}
star(5)

//      *
//     **
//    ***
//   ****
function star(n) {
    for (let i = 0; i<n; i++){
        let row = "";
        for (let j = 0; j<n-1-i; j++){
            row += " ";
        }
        for (let k = 0; k <= i; k++){
            row+="*"
        }
        console.log(row);
    }
}
star(5)

// 1
// 10
// 101
// 1010
function star(n) {
    for (let i = 0; i<n; i++){
        let row = "";
        let toggle = 1;
        for (let j = 0; j <= i; j++) {
            row += toggle;
            if (toggle == 1)
                toggle = 0;
            else
                toggle = 1;
        }
        console.log(row);
    }
}
star(7)

// 1
// 01
// 010
// 1010
// 10101
// 010101
function star(n) {
    let toggle = 1;
    for (let i = 0; i<n; i++){
        let row = "";
        for (let j = 0; j <= i; j++){
            row += toggle;
            if (toggle == 1)
                toggle = 0;
            else
                toggle = 1;
        }
        console.log(row);
    }
}
star(7)
