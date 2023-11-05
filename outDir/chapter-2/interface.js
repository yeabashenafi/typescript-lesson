const tshirt2 = {
    name: 'Polo',
    price: 34,
};
const tv = {
    name: "Samsung TV",
    price: 1000,
};
const photoshoot = {
    startTime: new Date('June 12, 2023 12:00:00'),
    endTime: new Date('June 12, 2023 15:00:00'),
    name: "My wedding Photo shoot",
    price: 200
};
function purchaseItem(item) {
    console.log(item.price);
    return item;
}
// this will work
purchaseItem({
    price: 12,
    name: "Tv remote"
});
// we can also pass an Item object
purchaseItem(tv);
// or a Service object
purchaseItem(photoshoot);
