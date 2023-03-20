"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
// Functions
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(1, 2));
logMsg(subtract(1, 2));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(4, 5));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(4, 5));
// Rest parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
