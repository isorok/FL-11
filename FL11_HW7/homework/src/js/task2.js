let random;
let number;
let gameCondition = confirm('Do you want to play a game?');
let total = 0;
let attempts = 3;
let pricepoolStart = 100;
let pricepool = pricepoolStart;
let screenRangeStart = 8;
let screenRange = screenRangeStart;
let range = screenRange + 1;
let biggerRange = 4;
let totalAttempts = 3;
let twicePrizePool = 2;
let staticRange = 8;
let staticPrizePool = 100;
do {
    if (gameCondition === true) {
        random = Math.floor(Math.random() * range);
        for (let i = 0; i < totalAttempts; i++) {
            number = parseInt(prompt('Choose a roulette pocket number from 0 to ' + screenRange + '\n' +
                'Attempts left: ' + attempts + '\n' + 'Total prize: ' + total + '\n' +
                'Possible prize on current attempt: ' + pricepool));
            attempts--;
            if (number === random) {
                total = total + pricepool;
                gameCondition = confirm('Congratulation, you won! Your prize is: ' +
                    total + ' $. Do you want to continue?');
                if (gameCondition === true) {
                    pricepoolStart = pricepoolStart * twicePrizePool;
                    pricepool = pricepoolStart;
                    screenRangeStart = screenRangeStart + biggerRange;
                    screenRange = screenRangeStart;
                    range = screenRange + 1;
                    attempts = totalAttempts;
                    break;
                } else {
                    alert('Thank you for your participation. Your prize is: ' + total + ' $');
                    gameCondition = confirm('Do you want to try again?');
                    pricepoolStart = staticPrizePool;
                    pricepool = pricepoolStart;
                    screenRangeStart = staticRange;
                    screenRange = screenRangeStart;
                    range = screenRange + 1;
                    total = 0;
                    attempts = totalAttempts;
                    break;
                }
            } else {
                if (i !== twicePrizePool) {
                    pricepool = Math.floor(pricepool / twicePrizePool);
                } else {
                    alert('Thank you for your participation. Your prize is: ' + total + ' $');
                    gameCondition = confirm('Do you want to try again?');
                    pricepoolStart = staticPrizePool;
                    pricepool = pricepoolStart;
                    screenRangeStart = staticRange;
                    screenRange = screenRangeStart;
                    range = screenRange + 1;
                    attempts = totalAttempts;
                    total = 0;
                }
            }
        }
    } else {
        alert('You did not become a billionaire, but can');
    }
} while (gameCondition === true);