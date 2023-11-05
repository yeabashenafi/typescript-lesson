// known as numeric enums
var newSizes;
(function (newSizes) {
    newSizes[newSizes["small"] = 0] = "small";
    newSizes[newSizes["medium"] = 1] = "medium";
    newSizes[newSizes["large"] = 2] = "large"; // 2
})(newSizes || (newSizes = {}));
function setProductSizes(size) {
    //..
}
// can be called with the enums
setProductSizes(newSizes.large);
// if the enum is printed
console.log(newSizes);
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
var newerSizes;
(function (newerSizes) {
    newerSizes["small"] = "small";
    newerSizes["medium"] = "medium";
    newerSizes["large"] = "large";
})(newerSizes || (newerSizes = {}));
// if the new enum is now logged
// the output will be
// [LOG] :{
// "small":"small",
// "medium": "small",
// "large": "small"
//}
// heterogenous enums
var oldSizes;
(function (oldSizes) {
    oldSizes[oldSizes["xsmall"] = 0] = "xsmall";
    oldSizes["small"] = "small";
    oldSizes["medium"] = "medium";
    oldSizes["large"] = "large";
})(oldSizes || (oldSizes = {}));
