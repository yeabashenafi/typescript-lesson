// type aliases can be used with union types
type Sizes = 'small' | 'large' | 'medium'

function setProductSize(size : Sizes){
    // ...
}

setProductSize('small')

// aliases can also be used for
type myString = string
type newString = 'hello'
type successCode = 'sucessCode' | 1 

// aliases can also be used for objects
type Product = {
    name: string,
    price: number
}

const tshirt: Product = {
    name: 'Polo',
    price: 34
} 