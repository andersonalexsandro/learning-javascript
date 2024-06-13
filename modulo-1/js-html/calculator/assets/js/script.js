function createCalculator(){
    return {
        display: document.querySelector('.display'),
        
        start(){
            this.buttonClick();
        },

        clearDisplay(){
            this.display.value = '';
        },

        backSpaceDisplay(){
            this.display.value = this.display.value.slice(0, -1);
        },

        btnToDisplay(value){
            this.display.value += value
        },

        result(){
            let count = this.display.value;
            try{
                let result = eval(count);
                this.display.value = result
            }catch(e){
                alert('Invalid count ' + e);
                return;
            }
        },

        buttonClick(){
            let timer;
            document.addEventListener('mousedown', (event) =>{
                event.preventDefault();
                const element = event.target;
                if(element.classList.contains('result')){
                    this.result()
                    return
                }
                if(element.classList.contains('clear')) {
                    timer = setTimeout(() => {
                        this.clearDisplay();
                    }, 500);
                    return;
                }
                if(element.classList.contains('btn')) this.btnToDisplay(element.innerText);
            });
                
            document.addEventListener('mouseup', (event) =>{
                const element = event.target;
                if(element.classList.contains('clear')) {
                    clearTimeout(timer);
                    this.backSpaceDisplay();
                }
            });
        },
    };
}

const calculator = createCalculator();
calculator.start();