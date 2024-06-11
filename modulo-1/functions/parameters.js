function anyFuction(){
    console.log(arguments);
}

anyFuction('First value', 1, 2, 3, 4, 5, 6, 7, 8, 9)

function APlusB(a = 0, b = 0){
    return a + b;
}

console.log(APlusB());

function count(operator, acumulator, ...numbers){
    for(let number of numbers){
        if (operator === '+') acumulator += number;
        if (operator === '-') acumulator -= number;
        if (operator === '/') acumulator /= number;
        if (operator === '*') acumulator *= number;
    }
    console.log(acumulator)
}

count('+', 0, 20, 30, 40, 50)