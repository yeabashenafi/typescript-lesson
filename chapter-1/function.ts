// implicit parameter typing

// in this definition both x and y will have implicit types of any
function sum(x,y){
    return x + y
}

console.log(sum("2" , 2)) // will work and return '22' by concatenating both values
console.log(sum(2 , 2)) // will work and return 4

// explicit parameter typing

function newSum(x: number , y: number){
    return x + y;
}

console.log(newSum("2",2)) // will not work since both parameters must have number values
console.log(newSum(2,2)) // will work and return 4

// implicit function typing

function newerSum(x,y){ // function will have an implicit type of any since both parameters are implicitly of type any
    return x + y
}

function veryNewSum(a : number,b: number){// function will have an implicit type of number since both parameters are explicitly of type number
    return a + b
}

function veryOldSum(a ,b: number){// function will have an implicit type of any since one parameter is implicitly of type any
    return a + b
}

// explicit function typing
function oldSum(a : number,b: number) : number{// function will have an explicit type of number
    
    return a + b
}

// parameter destructuring
function addition({x,y} : {x:number, y: number}): number {
    return x + y
}

// function that does not return anything
function log(value: any): void {
    console.log(value)
}

// optional parameter
function greet(name ?: string) : void {
    if (name){
        console.log(`Hello ${name}`);
    }
    else{
        console.log(`Hello stranger`)
    }
}