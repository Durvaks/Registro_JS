function calculactorGeneractor(){ /*Função para gerar a calculadora */
    let calculactor = document.createElement("div");
    calculactor.id = "calculadora";
    /*Gerando o Display e inserindo na calculadora*/
    let display = document.createElement("input");
    display.classList.add("display_calculactor");
    display.value = 0;
    calculactor.appendChild(display);
    /*buttons*/
    let buttonList = ["AC","C","%","/","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="];
        buttonList.forEach(element => {
            let button = document.createElement("button");
            button.classList.add("button_calculactor");
            button.textContent = element.toUpperCase();
/* ---- elaborar melhor as funcionalidades da calculadora ----              
                if(element == "+"){
                    button.classList.add("sum_button");// <== para o grid do layout
                    button.addEventListener("click", ()=> tipoDeCalculo = "soma");
                }
                if(element == "-"){button.addEventListener("click", ()=> buttonsFunctions())};
                if(element == "/"){button.addEventListener("click", ()=> buttonsFunctions())};
                if(element == "x"){button.addEventListener("click", ()=> buttonsFunctions())};
                if(element == "%"){button.addEventListener("click", ()=> buttonsFunctions())};
                if(!isNaN(element)){
                    button.addEventListener("click", function (){
                        novoValor += element;
                        display.value = novoValor;
                    } )

                }
                if(element == "="){button.addEventListener("click")}
*/
            calculactor.appendChild(button);
        });

    return calculactor
}




/*inserir calculadora pronta na pagina */
document.getElementById("calculactor").addEventListener("click", () => {
    let mainDOM = document.getElementById("input");
    mainDOM.innerHTML = "";
    mainDOM.appendChild(calculactorGeneractor());
})