function getNumbers(string) {
    let numbers = [];
    let num;
    for (let i = 0; i < string.length; i++) {
        num = parseInt(string[i])
        if (!isNaN(num)) {
            numbers.push(num);
        }

    }
    return numbers;
}
getNumbers('he11o');

function findTypes(...array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = typeof array[i];
    }
    return array;
}
findTypes(null, 5, 'hello');

function executeForEach([...array], func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
executeForEach([1, 2, 3], (e) => console.log(e))

function mapArray([...array], func) {
    let newArray = [];
    executeForEach([...array], (element) => {
        newArray.push(func(element));
    })
    return newArray;
}
mapArray([2, 5, 8], (el) => el + 3)

function filterArray([...array], func) {
    let filtArray = [];
    executeForEach([...array], (element) => {
        if (func(element)) {
            filtArray.push(element)
        }
    })
    return filtArray;
}
filterArray([2, 5, 8], (el) => el > 3)

function showFormattedDate(date) {
    let day = date.getDate();
    let month = date.toLocaleString('en-us', { month: 'short' });
    let year = date.getFullYear();
    return `Date: ${day} of ${month}, ${year}`;
}
showFormattedDate(new Date())

function canConvertToDate(date) {

    if (isNaN(Date.parse(date))) {
        return false;
    }
    return true;
}
canConvertToDate(new Date('2016-13-18T00:00:00'));

function daysBetween(dateOne, dateTwo) {

    let difference = dateOne - dateTwo;
    let millisecondsPerDay = 86400000;
    console.log(difference);

    return Math.round(difference / millisecondsPerDay);
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));


let data = [{
        'id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        'id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        'id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        'id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let counter = 0;
    let age = '2001-01-01T00:00:00'
    executeForEach([...data], (element) => {
        if (element.birthday <= age) {
            counter++;
        }
    })
    return counter;
}
getAmountOfAdultPeople(data);

function keys(obj) {
    let result = [],
        prop;
    for (prop in obj) {
        result.push(prop);
    }
    return result;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

function values(obj) {
    let result = [],
        prop;
    for (prop in obj) {
        result.push(obj[prop]);
    }
    return result;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 })