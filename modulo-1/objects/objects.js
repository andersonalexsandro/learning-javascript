// constructor function
function Person(name, middlename){
    const ID = 123456;

    this.name = name;
    this.middlename = middlename;
    this.myFunction =  () => console.log('i am a function');
}

let p1 = new Person("Anderson", "Soares");

p1.myFunction();
console.log(p1.name);
console.log(p1.middlename);


try{
    console.log(p1.ID);
}catch(error){
    console.log(error);
}

const person2 = new Object();
person2.name = 'Anderson';
console.log(person2.name);

delete person2.name;
console.log(person2.name);

Object.freeze(person2)
person2.name = 'UnderSun';
console.log(person2.name);

