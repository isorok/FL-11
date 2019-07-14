function isBigger(num1, num2) {
    return num1 > num2;
}

function isSmaller(num1, num2) {
    return num1 === num2 ? false : !isBigger(num1, num2);
}
isSmaller(3, 6);