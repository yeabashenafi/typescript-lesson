// interface with functional props
interface Emailable{
    emailBody(): string,
    emailSubject(): string
}

class Type{
    name: string
    readonly price : number | undefined // having a union type 
    // readonly modifier only allows the prop to be read and not assigned after the constructor
    
    constructor(name :string, price: number){
        this.name = name
        this.price = price        
    }

    // class function that returns this
    buy(): this{
        console.log(this.price)
        return this
    }
}

class Category extends Type{
    public color: string  = 'gray' // having a default value 
    protected size?: newSizes // optional value

    constructor(name: string, price: number){
        super(name, price);
    }

    
}

// service implements the interface
class NewService extends Type implements Emailable {
    private startTime: Date // private access modifier will only allow the property to be access only inside the class not even in subclasses
    endTime : Date

    constructor(name: string , price : number, startTime : Date, endTime: Date){
        super(name, price)
        this.startTime = startTime
        this.endTime = endTime
    }
    
    // interface methods are defined
    emailBody(): string {
        return `Thank you for purchasing ${this.name}. Your appointment starts at ${this.startTime}`
    }

    emailSubject(): string {
        return `${this.name} | My company`
    }
}

// a method that uses the interface properties
// only accepts objects of classes the implement the interface
function sendEmail(emaialble : Emailable, to:string){
    console.log('Body:', emaialble.emailBody());
    console.log('Subject:', emaialble.emailSubject());
    console.log('To:', to);
}

const shirt = new Category("T-shirt", 20)
shirt.color = 'red'
shirt.size = newSizes.large // will not be allowed to be accessed outside of the class since the property is protected 
shirt.buy()

const newWeddingPhotoShoot = new NewService(
    'Her Wedding Photo Shoot',
    230,
    new Date('June 12, 2023 12:00:00'),
    new Date('June 12, 2023 15:00:00')
)

newWeddingPhotoShoot.buy()

sendEmail(newWeddingPhotoShoot,"ashenafiashenafi@gmail.com")