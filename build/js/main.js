"use strict";
// Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object'
        && !Array.isArray(arg)
        && arg != null);
};
console.log(isObj(true));
console.log(isObj('Ken'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Ken' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg: arg, is: false };
    }
    return { arg: arg, is: !!arg };
};
console.log(isTrue(true));
console.log(isTrue('Ken'));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({ name: 'Ken' }));
console.log(isTrue(null));
console.log(isTrue([]));
console.log(isTrue(undefined));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Ken' }));
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
