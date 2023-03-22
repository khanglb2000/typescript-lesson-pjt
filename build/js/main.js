"use strict";
// Index Signatures
// interface TransactionObj {
//     [index: string]: number
// }
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todayTransactions.Pizza);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todayTransactions));
const student = {
    name: 'Ken',
    GPA: 8.5,
    classes: [100, 110]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 2000,
    bonus: 500,
    sidehustle: 100
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
