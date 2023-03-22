"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignA = {
    studentId: 'stu00258',
    title: "Final project",
    grade: 9
};
console.log(updateAssignment(assignA, { grade: 9.5 }));
const assignGrade = updateAssignment(assignA, { grade: 10 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to db, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
// Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Ken: "A",
    John: 'B'
};
const gradeData = {
    Ken: { assign1: 10, assign2: 9 },
    John: { assign1: 8, assign2: 8 },
};
const score = {
    studentId: '256ddf',
    grade: 8
};
const preview = {
    studentId: 'sdgsd5',
    title: 'Oh'
};
// Return type
// type newAssign = {titles: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Type", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUser().then(users => console.log(users));
