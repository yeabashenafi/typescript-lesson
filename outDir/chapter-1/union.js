// union types allow multiple types to be allowed for a variable
let booleanOrString = true;
booleanOrString = 'string'; // will work
booleanOrString = 2; // will not work
// union types in functions
function printId(id) {
    console.log(id.toUpperCase()); // will not work since method is not allowed for all data types
    if (typeof id === 'string') { // is called narrowing
        console.log(id.toUpperCase()); // will work
    }
    else {
        console.log(id);
    }
}
