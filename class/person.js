class Person{
    constructor(name, middlename){
        this.name = name;
        this.middlename = middlename;
    }

    speak(){
        console.log('speaking')
    }

    eat(){
        console.log('eating')
    }

    drink(){
        console.log('Drinking')
    }
}

const p1 = new Person('Anderson', 'Soares')

p1.speak();
p1.eat();
p1.drink();