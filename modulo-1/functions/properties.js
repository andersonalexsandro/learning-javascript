// function declaration (hoisting)

sayHi();

function sayHi(){
    console.log('Hi')
}

// First-class objects
// Function expression

const iAmData = function (){
    console.log('I am data')
};

iAmData();

// Arrow function
const arrowFunction = () => {
    console.log("I am a Arrow Function")
};

arrowFunction();

// inside a obcjet

const ojb = {
    speaking(){
        console.log("I am speaking")
    }
}

ojb.speaking();