function hello(name){
    console.log("Hello world " + name)
}
hello("Anderson")


const power = function (n){
    return n ** 2
};
console.log(power(3))


const doubleValue = (n) => {
    return n * 2
};
console.log(doubleValue(2))


const doubleValueAgain = n => n * 2
console.log(doubleValueAgain(3))

console.log("Pão de carne");

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

console.log(rand())