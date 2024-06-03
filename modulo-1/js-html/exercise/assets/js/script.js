// Capture the submit event of the form
const medidas = ['Baixo peso', 'Intervalo normal', 'Sobrepeso', 'Obesidade classe I', 'Obesidade classe II', 'Obesidade classe III']

const form = document.querySelector('#form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    resetTag('.div-result')
    const weighInput = event.target.querySelector('.weigh')
    const highInput = event.target.querySelector('.high')

    const weigh = Number(weighInput.value)
    const high = Number(highInput.value)

    const IMC = calculateIMC(weigh, high)
    insertPinDivResult(`IMC: ${IMC}`)
    const category = getIMCCategory(IMC)
    switch (category) {
        case 0:
            insertPinDivResult(`Diagnóstico: ${medidas[0]}`);
            break;
        case 1:
            insertPinDivResult(`Diagnóstico: ${medidas[1]}`);
            break;
        case 2:
            insertPinDivResult(`Diagnóstico: ${medidas[2]}`);
            break;
        case 3:
            insertPinDivResult(`Diagnóstico: ${medidas[3]}`);
            break;
        case 4:
            insertPinDivResult(`Diagnóstico: ${medidas[4]}`);
            break;
        case 5:
            insertPinDivResult(`Diagnóstico: ${medidas[5]}`);
            break;
        default:
            insertPinDivResult(`Diagnóstico: Valor inválido`);
    }
});

function calculateIMC(weigh, high){
    if (validadeInput(weigh) && validadeInput(high)){
        return (weigh / (high ** 2)).toFixed(2)       
    }
    return null
}

function validadeInput(number){
    if(number > 0){
        return true
    }
    console.log('Erro')
    return false
}

function insertPinDivResult(msg){
    const result = document.querySelector('.div-result')
    const p = createP()
    p.classList.add('result-paragraph')
    p.innerHTML = msg
    result.appendChild(p)
}

function createP(){
    const p = document.createElement('p')
    return p
}

function resetTag(className){
    const result = document.querySelector(className)
    result.innerHTML = ''
}

function getIMCCategory(IMC) {
    if (IMC < 18.5) return 0;
    if (IMC >= 18.5 && IMC < 24.9) return 1;
    if (IMC >= 25 && IMC < 29.9) return 2;
    if (IMC >= 30 && IMC < 34.9) return 3;
    if (IMC >= 35 && IMC < 39.9) return 4;
    if (IMC >= 40) return 5;
    return null;
}