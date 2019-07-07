let a1 = prompt('Enter your value for a1', '0');
let a2 = prompt('Enter your value for a2', '0');
let b1 = prompt('Enter your value for b1', '0');
let b2 = prompt('Enter your value for b2', '0');
let c1 = prompt('Enter your value for c1', '0');
let c2 = prompt('Enter your value for c2', '0');
let x1, x2, d = 2;
if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) ||
    isNaN(c1) || isNaN(c2) || !a1 || !a2 || !b1 || !b2 || !c1 || !c2) {
    alert('Invalid input data');
} else {
    x1 = (+a1 + +b1) / d;
    x2 = (+a2 + +b2) / d;
    if (x1 === +c1 && x2 === +c2) {
        console.log(true);
    } else {
        console.log(false);
    }
}