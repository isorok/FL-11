function reverseNumber(num) {
    let reverse = '';
    num = num + '';
    if (num < 0) {
        for (let i = 0; i < num.length; i++) {
            reverse = reverse + num[num.length - 1 - i];
        }
        reverse = '-' + parseInt(reverse)
        return reverse;
    } else {
        for (let i = 0; i < num.length; i++) {
            reverse = reverse + num[num.length - 1 - i];
        }
        return parseInt(reverse);
    }
}
reverseNumber(563);