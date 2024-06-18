// defineProperty - defineProperties

function Product(name, priece, stock){
    this.stock = stock;
    this.name = name;
    this.priece = priece;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // print the key or is iterable  
        value: stock,
        writable: false,
        configurable: false // cant configure again or delete
    });
}

const p1 = new Product('Tshirt', 20, 3);
p1.stock = 5000;
console.log(p1);