const reverse = (value) => {
    // typeof is called typeguard
    if (typeof value === 'string') {
        return value.split('').reverse().join('');
    }
    else {
        return [...value].reverse();
    }
};
console.log(reverse('123')); // will log '321'
console.log(reverse(['1', '2', '3'])); // will log ['3','2','1']
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function greet(entity) {
    if (entity instanceof Person) { // used for checking class objects
        console.log(`Hello ${entity.firstName} ${entity.lastName}`);
    }
    else {
        console.log(`Hello ${entity.name}`);
    }
    // if the types for the parameter is/are interfaces
    // it can be checked by
    if ("firstName" in entity) {
        // do this;
    }
    else {
        // do that
    }
}
