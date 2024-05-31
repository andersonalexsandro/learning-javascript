// Capture the submit event of the form
const form = document.querySelector('#form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    const weighInput = event.target.querySelector('#weigh')
    const highInput = event.target.querySelector('#high')

    const weigh = Number(weighInput.value)
    const high = Number(highInput.value)

    const IMC = weigh / (high ** 2)
    setResult(`IMC: ${IMC}`)
});

function setResult(msg){
    const result = document.querySelector('#result')
    result.innerHTML = ''
    const p = createP()
    p.classList.add('result-paragraph')
    p.innerHTML = msg
    result.appendChild(p)
}

function createP(){
    const p = document.createElement('p')
    return p
}