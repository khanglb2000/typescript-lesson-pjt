"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// Be careful, TS show no error, but a string is returned
let nextVal = addOrConcat(2, 3, 'concat');
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myImg');
const nextImg = document.getElementById('#myId');
