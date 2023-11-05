// variables can also be defined for literals
let pi : 3.14 = 3.14
pi = 3 // will not work

// literal typing can be used for function parameters with union pipes
function setProductSize(size : 'small'| 'medium' | 'large'){
    // ...
}

setProductSize('huge') // will not work
setProductSize('large') // will work
setProductSize('small') // will work
setProductSize('medium') // will work