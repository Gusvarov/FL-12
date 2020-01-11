const two = 2;
const three = 3;
const four = 4;
const five = 5;
const seven = 7;
const eight = 8;
const fourteen = 14;
const twentyNine = 29;
const thirtyOne = 31;
const fortyEight = 48;
const fiftyEight = 58;
const fullYearDays = 365;
const prevYear = 2019;

// 1 task
function convert(...args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
       let item = args[i];
        if (typeof item === 'number') {
            arr.push(String(item));
        }
        if (typeof item === 'string') {
            arr.push(Number(item));
        }
    }
    return arr;
}

console.log(convert(1,'2','3',four));

//2 task
function executeForEach(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] === 'string' ? result.push(func(parseInt(arr[i]))) : result.push(func(arr[i]));
    }
    return result;
}

console.log(executeForEach([1,two,three], function(el) {
 return el * two;
}));

//3 task
function mapArray(arr, func) {
    return executeForEach(arr, func);
}

console.log(mapArray([two,'5',eight], function(el) {
 return el + three;
}));

//4 task
function filterArray(arr, func) {
    let result = [];
    executeForEach(arr, item => func(item) ? result.push(item) : '');
    return result;
}

console.log(filterArray([two, five, eight], function(el) {
 return el % two === 0; 
}));

//5 task
function flipOver(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(flipOver('hey world'));

//6 task
function makeListFromRange(arr) {
    let result = [];
    let lastElement = arr[arr.length - 1];
    arr[0] = arr[0] - 1;
    while (arr[0] !== lastElement) {
        arr[0]++
        result.push(arr[0]);
    }
    return result;
}

console.log(makeListFromRange([two, seven]))

//7 task
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
  
function getArrayOfKeys(arr, key) {
    let result = [];
    executeForEach(arr, item => result.push(item[key]));
    return result;
}

console.log(getArrayOfKeys(actors, 'name'));

//8 task
function substitute(arr) {
    const minNum = 30;
    return mapArray(arr, item => item < minNum ? '*' : item)
}

console.log(substitute([fiftyEight, fourteen, fortyEight, two, thirtyOne, twentyNine]));

//9 task
const date = new Date(prevYear, 0, two);

function getPastDay(date, days) {
    const dayMilliseconds = 86400000; 
    return new Date(date.getTime() - days * dayMilliseconds).getDate();
}

console.log(getPastDay(date, 1)); 
console.log(getPastDay(date, two)); 
console.log(getPastDay(date, fullYearDays)); 

//10 task
function formatDate(date) {
    const minNum = 10;
    const hours = date.getHours() < minNum ? `0${date.getHours()}`: date.getHours();
    const minutes = date.getMinutes() < minNum ? `0${date.getMinutes()}` : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00'))); 
console.log(formatDate(new Date())); 