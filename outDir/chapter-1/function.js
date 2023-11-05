// implicit parameter typing
// in this definition both x and y will have implicit types of any
function sum(x, y) {
    return x + y;
}
console.log(sum("2", 2)); // will work and return '22' by concatenating both values
console.log(sum(2, 2)); // will work and return 4
// explicit parameter typing
function newSum(x, y) {
    return x + y;
}
console.log(newSum("2", 2)); // will not work since both parameters must have number values
console.log(newSum(2, 2)); // will work and return 4
// implicit function typing
function newerSum(x, y) {
    return x + y;
}
function veryNewSum(a, b) {
    return a + b;
}
function veryOldSum(a, b) {
    return a + b;
}
// explicit function typing
function oldSum(a, b) {
    return a + b;
}
// parameter destructuring
function addition({ x, y }) {
    return x + y;
}
// function that does not return anything
function log(value) {
    console.log(value);
}
// optional parameter
function greet(name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello stranger`);
    }
}
