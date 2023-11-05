// known as numeric enums
enum newSizes {    
    small, // 0
    medium, // 1
    large // 2
}


function setProductSizes(size: newSizes){
     //..
}

// can be called with the enums
setProductSizes(newSizes.large)

// if the enum is printed
console.log(newSizes)

// the output will be
// [LOG] :{
// "0":"small",
// "1":"medium",
// "2":"large",
// "small":0,
// "medium": 1,
// "large": 2
//}

// to change the numeric enum to a string enum
enum newerSizes {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

// if the new enum is now logged
// the output will be
// [LOG] :{
// "small":"small",
// "medium": "small",
// "large": "small"
//}

// heterogenous enums
enum oldSizes {
    xsmall,
    small = 'small',
    medium = 'medium',
    large = 'large',
}