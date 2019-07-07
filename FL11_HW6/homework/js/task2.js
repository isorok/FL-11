let a = prompt('Enter your value for a', '0');
let b = prompt('Enter your value for b', '0');
let c = prompt('Enter your value for c', '0');

let x1, x2;
if (isNaN(a) || isNaN(b) || isNaN(c) || !a || !b || !c || a < 0 || b < 0 || c < 0) {
    alert('Invalid input data');
} else {
    if (+a + +b < c || +a + +c < b || +b + +c < a) {
        console.log('Triangle doesn’t exist');
    } else {
        if (a === b && b === c) {
            console.log('Eequivalent triangle');
        } else {
            if (a === b && a !== c || b === c && b !== a || c === a && c !== b) {
                console.log('Isosceles triangle');
            } else {
                console.log('Normal triangle');
            }
        }
    }
}