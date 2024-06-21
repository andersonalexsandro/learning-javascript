const _speedLimit = Symbol('speedLimit');

class Car{
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

const car1 = new Car('Fusca', 0)

for(let i = 0; i<=120; i++) car1.speedUp();
console.log(car1.speed);
car1.speedLimit = 200;

for(let i = 0; i<=80; i++){
    car1.speedUp();
} 
console.log(car1.speed);

car1.speedLimit = 0;

