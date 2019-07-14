function isInteger(num) {
    let value = parseFloat(num);
    return !isNaN(num) && (value | 0) === value;
}
isInteger(5.1);