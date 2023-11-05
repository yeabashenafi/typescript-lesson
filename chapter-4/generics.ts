interface Person {
    name: string
    age: number
}

const me: Person = {
    name: 'Yeabsira',
    age: 34
}

// this function has generics used 
// it implies that whatever type is received that type will be returned
const clone = <T> (value: T): T => { // The T used can be any variable 
    const json = JSON.stringify(value)
    return JSON.parse(json)
}
// the above function can be used for all types of variables

const myClone = clone(me)


const books: string[] = ['Atomic Habits','Rich Dad Poor Dad']

const bookCopies = clone<string[]>(books) 