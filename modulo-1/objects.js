const person = {
    pname: 'Anderson',
    middlename: 'Soares',
    age: 20
}

console.log(person.pname)

function createPerson(name, middlename, age){
    return {
        name: name,
        middlename: middlename,
        age: age
    }
}

const person1 = createPerson("Fulano", "Beltrano", 69)
console.log(person1.name)



function createPerson2(name, middlename, age){
    return{
        name,
        middlename,
        age,
    }
}

const person2 = createPerson2("Fulano2", "Beltrano2", 96)
console.log(person2.name)


const talkativePerson = {
    pname: 'Talkative Anderson',
    middlename: 'Speaker',
    age: 20,

    speak() {
        console.log(this.pname + ' is Speaking')
    },

    grows(){
        this.age++
    }
}

talkativePerson.speak()
console.log(talkativePerson.age)
talkativePerson.grows()
console.log(talkativePerson.age)
