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


// Example of Promise.resolve
const promiseResolved = Promise.resolve('Immediately resolved');
promiseResolved.then(result => console.log(result)); // Output: Immediately resolved

// Example of Promise.reject
const promiseRejected = Promise.reject('Immediately rejected');
promiseRejected.catch(error => console.error(error)); // Output: Immediately rejected

// Example of Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // Output: [3, 42, "foo"]
}).catch(error => {
    console.error(error);
});


async function executeWaitASecond() {
    try {
        let response = await waitASecond('Phrase 1', rand(1, 3));
        console.log(response);
        
        response = await waitASecond('Phrase 2', rand(1, 3));
        console.log(response);
        
        response = await waitASecond('Phrase 3', rand(1, 3));
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

executeWaitASecond();