function addOne(x) {
    return x + 1;
}

function pipe(...array) {
    let pipeSum = array[0];
    for (let i = 1; i < array.length; i++) {
        pipeSum = array[i](pipeSum);
    }
    return pipeSum;
}
pipe(1, addOne, addOne, addOne);