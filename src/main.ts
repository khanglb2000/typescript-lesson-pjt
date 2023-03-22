// Utility types

// Partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assignA: Assignment = {
    studentId: 'stu00258',
    title: "Final project",
    grade: 9
}

console.log(updateAssignment(assignA, {grade: 9.5}));
const assignGrade: Assignment = updateAssignment(assignA, {grade: 10});

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGrade,
    verified: true
}

recordAssignment({ ...assignGrade, verified: true })

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = 'Ken' | 'John'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'E'

const finalGrades: Record<Students, LetterGrades> = {
    Ken: "A",
    John: 'B'
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Ken: {assign1: 10, assign2: 9},
    John: {assign1: 8, assign2: 8},
}

// Pink and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: '256ddf',
    grade: 8
}

type AssignReview = Omit<Assignment, "grade" | "verified">

const preview: AssignReview = {
    studentId: 'sdgsd5',
    title: 'Oh' 
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, 'E'>

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable
type AllPossibleGrade = "Ken" | "John" | "Dave" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrade>

// Return type
// type newAssign = {titles: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Type", 100)
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);

// Awaited - help us with the ReturnType of a Promise
interface User {
    id: number,
    name: string,
    usernames: string,
    email: string
}

const fetchUser = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'   
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) {
            console.log(err.message);   
        }
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>
fetchUser().then(users => console.log(users));
















