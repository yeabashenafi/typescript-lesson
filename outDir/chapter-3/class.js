class Type {
    // readonly modifier only allows the prop to be read and not assigned after the constructor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // class function that returns this
    buy() {
        console.log(this.price);
        return this;
    }
}
class Category extends Type {
    constructor(name, price) {
        super(name, price);
        this.color = 'gray'; // having a default value 
    }
}
// service implements the interface
class NewService extends Type {
    constructor(name, price, startTime, endTime) {
        super(name, price);
        this.startTime = startTime;
        this.endTime = endTime;
    }
    // interface methods are defined
    emailBody() {
        return `Thank you for purchasing ${this.name}. Your appointment starts at ${this.startTime}`;
    }
    emailSubject() {
        return `${this.name} | My company`;
    }
}
// a method that uses the interface properties
// only accepts objects of classes the implement the interface
function sendEmail(emaialble, to) {
    console.log('Body:', emaialble.emailBody());
    console.log('Subject:', emaialble.emailSubject());
    console.log('To:', to);
}
const shirt = new Category("T-shirt", 20);
shirt.color = 'red';
shirt.size = newSizes.large; // will not be allowed to be accessed outside of the class since the property is protected 
shirt.buy();
const newWeddingPhotoShoot = new NewService('Her Wedding Photo Shoot', 230, new Date('June 12, 2023 12:00:00'), new Date('June 12, 2023 15:00:00'));
newWeddingPhotoShoot.buy();
sendEmail(newWeddingPhotoShoot, "ashenafiashenafi@gmail.com");
