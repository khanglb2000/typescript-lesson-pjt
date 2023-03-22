// Index Signatures
// interface TransactionObj {
//     [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number,
}

const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todayTransactions.Pizza);

let prop: string = 'Pizza'
console.log(todayTransactions[prop]);

const todayNet = (transactions: TransactionObj): number => {
    let total = 0;
    for(const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
}

console.log(todayNet(todayTransactions));

// ==========================
interface Student {
    [key: string]: number | string | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Ken',
    GPA: 8.5,
    classes: [100, 110]
}

// console.log(student.test);

for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);  
}

logStudentKey(student, 'GPA')

// =================
// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 2000,
    bonus: 500,
    sidehustle: 100
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    
}



