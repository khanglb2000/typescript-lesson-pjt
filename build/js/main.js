"use strict";
let stringArr = ['oh', 'my', 'god'];
let cars = ['Hot Wheels', 'Tomica', 1980];
let mixedData = ['Toy', 2000, true];
stringArr[0] = 'Ken';
stringArr.push('Then');
cars[0] = 2005;
cars.unshift('Matchbox');
console.log("🚀 ~ file: main.ts:12 ~ cars:", cars);
let test = [];
let bands = [];
bands.push('Shake');
// Tuple
// Type must in order
let myTuple = ['Ken', 2005, true];
// Object
let myObj;
myObj = mixedData;
console.log("🚀 ~ file: main.ts:26 ~ myObj:", typeof myObj);
const exampleObj = {
    id: 2,
    name: 'Ken',
    active: true
};
let emp = {
    name: 'Eddie',
    active: true,
    cars: [2, 'Twin Mill', 'Bone Shaker']
};
console.log("🚀 ~ file: main.ts:45 ~ emp:", emp);
const greetCreator = (employee) => {
    return `Hello ${employee.name}!`;
};
console.log(greetCreator(emp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["dfs"] = 0] = "dfs";
    Grade[Grade["dsa"] = 1] = "dsa";
    Grade[Grade["dse"] = 5] = "dse";
    Grade[Grade["sad"] = 6] = "sad";
    Grade[Grade["aas"] = 7] = "aas";
})(Grade || (Grade = {}));
console.log(Grade.dse);
