function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitASecond(msg, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

waitASecond('Phrase 1', rand(1, 3))
    .then(response => {
        console.log(response);
        return waitASecond('Phrase 2', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return waitASecond('Phrase 3', rand(1, 3));
    })
    .then(response =>{
        console.log(response);
    })
    .catch();
