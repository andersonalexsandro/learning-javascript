const _speedLimit = Symbol('speedLimit');

class Vehicle{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
        this[_speedLimit] = 120;
    }

    speedUp(){
        if(this.speed >= this[_speedLimit]) console.log('maximum speed reached')
        else this.speed += 1;
    }

    brake(){
        if(this.speed <= 0) return;
        this.speed -= 1;        
    }

    set speedLimit(limit){
        if(this.speed >= limit){
            console.log('speed limit cant be less then speed');
            return;
        }
        this[_speedLimit] = limit;
    }

    get speedLimit(){
        return this[_speedLimit];
    }
}

const vehicle = new Vehicle('Fusca', 0)

for(let i = 0; i<=120; i++) vehicle.speedUp();
console.log(vehicle.speed);
vehicle.speedLimit = 200;

for(let i = 0; i<=80; i++){
    vehicle.speedUp();
} 
console.log(vehicle.speed);

vehicle.speedLimit = 0;

// heritage

class Car extends Vehicle{
    constructor(name, speed, convertible){
        super(name, speed);
        this.convertible = convertible;
    }
}

const car = new Car('Fiat', 0, true);

console.log()
console.log('##################')
console.log('#######car########')
console.log('##################')
console.log()

for(let i = 0; i<=120; i++) car.speedUp();
console.log(car.speed);
car.speedLimit = 200;

for(let i = 0; i<=80; i++){
    car.speedUp();
} 
console.log(car.speed);

car.speedLimit = 0;

