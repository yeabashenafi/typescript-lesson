// it is a best practice to use interfaces for object definitons 
interface Products {
    name: string,
    price: number
}

const tshirt2: Products = {
    name: 'Polo',
    price: 34,
} 

// new fields can be added to the interface
interface Products{
    color?: string // with the question mark the color property has become optional
}

// type aliases can not allow adding new props like the above one

// interfaces allow extending other interfaces

interface InventoryItem {
    name: string,
    price: number
}

interface Item extends InventoryItem{
    color? : string
}

interface Service extends InventoryItem{
    startTime : Date,
    endTime: Date
}

const tv: Item = {
    name :"Samsung TV",
    price : 1000,
}

const photoshoot: Service = {
    startTime : new Date('June 12, 2023 12:00:00'),
    endTime : new Date('June 12, 2023 15:00:00'),
    name: "My wedding Photo shoot",
    price: 200
} 

function purchaseItem(item: InventoryItem): InventoryItem{
    console.log(item.price)
    return item
}

// this will work
purchaseItem({
    price: 12,
    name: "Tv remote"
})

// we can also pass an Item object
purchaseItem(tv)

// or a Service object
purchaseItem(photoshoot)