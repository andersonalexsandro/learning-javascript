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