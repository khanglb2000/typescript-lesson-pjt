// Types aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Creator = {
    name: string,
    active: boolean,
    age?: number, // optional
    cars: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'Josn' | 'Amy'
userName = 'Amy'

// Functions
const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello!');
logMsg(add(1, 2));
logMsg(subtract(1, 2));

// type mathFunction = (a: number, b: number) => number
interface mathFunction { 
    (a: number, b: number): number
}

let multiply: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multiply(4, 5));

// optional parameters
const addAll = (a: number, b: number, c?:number): number => {
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// default parameter value
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(4, 5));

// Rest parameter
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string) => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while(true) {
        i++;
        if(i > 100) break
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true: false;
}

// Use of never type
const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError('This should never happen!');
}