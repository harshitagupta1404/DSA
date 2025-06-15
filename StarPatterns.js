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

