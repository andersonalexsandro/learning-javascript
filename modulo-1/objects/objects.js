// constructor function
function Person(name, middlename){
    const ID = 123456;

    this.name = name;
    this.middlename = middlename;
}

let p1 = new Person("Anderson", "Soares");

console.log(p1.name);
console.log(p1.middlename);

try{
    console.log(p1.ID)
}catch(error){
    console.log(error)
}