let stringArr = ['oh', 'my', 'god']

let cars = ['Hot Wheels', 'Tomica', 1980]

let mixedData = ['Toy', 2000, true]

stringArr[0] = 'Ken'
stringArr.push('Then')

cars[0] = 2005
cars.unshift('Matchbox')
console.log("🚀 ~ file: main.ts:12 ~ cars:", cars)


let test = []
let bands: string[] = []
bands.push('Shake')

// Tuple
// Type must in order
let myTuple: [string, number, boolean] = ['Ken', 2005, true]

// Object
let myObj: object
myObj = mixedData
console.log("🚀 ~ file: main.ts:26 ~ myObj:", typeof myObj)

const exampleObj = {
    id: 2,
    name: 'Ken',
    active: true
}

// type Creator = {
//     name: string,
//     active: boolean,
//     age?: number, // optional
//     cars: (string | number)[]
// }

interface Creator {
    name: string,
    active: boolean,
    age?: number, // optional
    cars: (string | number)[]
}

let emp: Creator = {
    name: 'Eddie',
    active: true,
    cars: [2, 'Twin Mill', 'Bone Shaker'] 
}
console.log("🚀 ~ file: main.ts:45 ~ emp:", emp)

const greetCreator = (employee: Creator) => {
    return `Hello ${employee.name}!`
}
console.log(greetCreator(emp));

// Enums
enum Grade {
    dfs, dsa, dse = 5, sad, aas
}

console.log(Grade.dse);


