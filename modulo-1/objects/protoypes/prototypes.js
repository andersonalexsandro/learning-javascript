function Person(name, middlename){
    this.name = name;
    this.middlename = middlename;
    // this.fullName = () => this.name + ' ' + this.middlename;
}

Person.prototype.fullName = function() {
    return this.name + ' ' + this.middlename;
}

const person1 = new Person('Anderson', 'Soares');
const person2 = new Person('Beatriz', 'Emily');
const date = new Date();
console.dir(person1);
console.dir(person2);
console.dir(date);

console.log('####')
console.log(person1.fullName())
console.log(person2.fullName())

function Product(name, price){
    this.name = name;
    this.price = price;
}

const p2 = {
    name: 'FlashLight',
    price: 50
};

Object.setPrototypeOf(p2, Product.prototype);

Product.prototype.increase = function (percentual){
    this.price = this.price + this.price * (percentual/100);
};

Product.prototype.discount = function (percentual){
    this.price = this.price - this.price * (percentual/100);
}


let p1 = new Product('Condom', 10);
p1.increase(100);
console.log(p1.price);

p2.increase(100);
console.log(p2.price);

