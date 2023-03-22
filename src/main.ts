// Generics
const echo = <T>(arg : T): T => arg 

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' 
    && !Array.isArray(arg) 
    && arg != null)
}

console.log(isObj(true));
console.log(isObj('Ken'));
console.log(isObj([1,2,3]));
console.log(isObj({name: 'Ken'}));
console.log(isObj(null));

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {arg: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg: arg, is: false}
    }
    return {arg: arg, is: !!arg}
}

console.log(isTrue(true));
console.log(isTrue('Ken'));
console.log(isTrue([1,2,3]));
console.log(isTrue({name: 'Ken'}));
console.log(isTrue(null));
console.log(isTrue([]));
console.log(isTrue(undefined));

// Use interface
interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    // process user with logic here
    return user;
}

console.log(processUser({id: 1, name: 'Ken'}));

const getUserProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}


