const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart')

let seconds = 0;
let timer;
let isRunning = false;

function getResetedDate(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startCountSeconds(){
    if(isRunning)return
    clearInterval(timer)
    timer = setInterval(function(){
        seconds++;
        clock.innerHTML= getResetedDate(seconds)
    }, 1000);
    isRunning = true
}

function pauseTimer(){
    clearInterval(timer);
    isRunning = false
}

function resetTimer(){
    pauseTimer();
    seconds = 0;
    clock.innerHTML = getResetedDate(seconds);
    isRunning = false;
}

start.addEventListener('click', function(event){
    startCountSeconds();
});

pause.addEventListener('click', function(event){
    pauseTimer();
});

restart.addEventListener('click', function(event){
    resetTimer();
});