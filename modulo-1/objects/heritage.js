// Product -> increase, discount
// Shirt = color, mug = material

function Product(name, price){
    this.name = name;
    this.price = price;
}
Product.prototype.increase = function (value){
    this.price += value
}
Product.prototype.discount = function (value){
    this.price -= value
}

function Shirt(name, price, color){
    Product.call(this, name, price);
    this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

 


let shirt = new Shirt('Gucci', 1000, 'black');

console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.color);

shirt.increase(200);
console.log(shirt.price);