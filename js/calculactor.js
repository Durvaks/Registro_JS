function calculactorGeneractor(){ /*Função para gerar a calculadora */
    let calculactor = document.createElement("div");
    calculactor.id = "calculadora";
    /*Gerando o Display e inserindo na calculadora*/
    let display = document.createElement("input");
    display.classList.add("display_calculactor");
    display.value = 0;
    calculactor.appendChild(display);
    /*Função de calculo*/
    function calculo(valor1, valor2, calcType){
        if(isNaN(valor1)||isNaN(valor2)){
            return
        }
        valor1 = Number(valor1);
        valor2 = Number(valor2);
        switch(calcType){
        case "%":
            return valor1*(valor2/100);
        case "/":
            return valor1 / valor2;
        case "X":
            return valor1 * valor2;
        case "-":
            return valor1 - valor2;
        case "+":
            return valor1 + valor2;
        }
    };
    /*buttons*/
    let baseValue = null;
    let calc = null;
    let buttonList = ["AC","C","%","/","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="];
        buttonList.forEach(element => {
            let button = document.createElement("button");
            button.classList.add("button_calculactor");
            button.textContent = element.toUpperCase();
            if(element == "+"){
                button.classList.add("sum_button");
            }
            button.addEventListener("click", function(e){
                let valorDigitado = e.target.outerText;
                if(!isNaN(valorDigitado)){
                    if(display.value == 0 || isNaN(display.value)){
                        display.value = null;
                    }
                    display.value += valorDigitado;
                }else{                    
                    switch(valorDigitado){
                        case "AC":
                            display.value = 0
                            baseValue = null;                            
                            break;
                        case "C":
                            display.value = 0;
                            break;
                        case ".":
                            display.value += valorDigitado;
                            break;
                        case "=":
                            display.value = calculo(baseValue, display.value, calc);
                            break;
                        default:
                            calc = valorDigitado; 
                            baseValue = display.value;                                               
                            display.value = valorDigitado;
                            break;
                    }

                }
            });
            calculactor.appendChild(button);
        });

    return calculactor
}