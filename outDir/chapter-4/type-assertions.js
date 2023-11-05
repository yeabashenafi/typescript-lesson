// are hints given to typescript
const theCanvas = document.getElementById('the-canvas');
// a function that returns a number or string
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
// since we passed true we know the returned value would be string
const netPrice = getNetPrice(20, 10, true);
// the above expression can also be written as
const netPrice = getNetPrice(29, 19, true);
// type assertions are only run compile time not at run time
function def(a, b) {
    return "hello";
}
let result = def(3, "4");
result.toUpperCase(); // will not work as typescript will assume the unknown type is returned
let result2 = def(5, "4");
result2.toUpperCase();
