window.addEventListener('load', () => {    
    
    /*Main footer*/
    document.querySelector("footer").innerHTML = `<p>Desenvolvido por: <a href="https://github.com/Durvaks">Renan Brandão</a></p>`

    /*Main Menu*/
    document.getElementById("nav_list").innerHTML=`
        <li class="nav-item">
            <a class="nav-link"  href="index.html">Principal</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="Metodologias.html">Metodologias</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="Javascript.html">JavaScript</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="Linux.html">Linux</a>
        </li>
        `
    
    function render_table(text, title){
        let input = document.getElementById("input");
        let elementReference = createElement(input);        
        let reference = elementReference.querySelector("tbody");
        let insertTxT = "";

            for(let i = 0; i<text.length; i++){
                let lineText = text[i];
                let td1 = "";
                let td2 = "";

                let position = lineText.indexOf(":");
                if(position !== -1){
                    for(let letterPosition = 0; letterPosition<position; letterPosition++){
                        td1 += lineText[letterPosition]
                    }
                    for(let letterPosition = position+2; letterPosition<lineText.length; letterPosition++){
                        td2 += lineText[letterPosition];
                    }
                    insertTxT += "<tr><td>"+td1+"</td><td>"+td2+"</td></tr>";
                }else{
                    insertTxT += "<p>"+lineText+"</p>";
                }
            }
            elementReference.querySelector("h3").innerHTML += "<h3>"+title+"<h3>";
            reference.innerHTML = insertTxT;
            
                
    }
    function createElement(referenciaDOM){

        let element = document.createElement("div");
        element.classList.add("block");
        let title = document.createElement("h3");
        title.classList.add("h3");
        element.appendChild(title);
        let table = document.createElement("table");
        table.classList.add("table");/*for bootstrap*/
        table.classList.add("table-dark");/*for bootstrap*/
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let trHead =  document.createElement("tr");
        let thSintax = document.createElement("th");
        let thDescription = document.createElement("th");

        thSintax.appendChild(document.createTextNode("Sintaxe"));
        thDescription.appendChild(document.createTextNode("Descrição"));

        trHead.appendChild(thSintax);
        trHead.appendChild(thDescription);

        thead.appendChild(trHead);

        table.appendChild(thead);
        table.appendChild(tbody);

        element.appendChild(table);

        referenciaDOM.appendChild(element);

        let lastReference = document.getElementsByClassName("block").length-1;
        return document.getElementsByClassName("block")[lastReference];
    }
    function clear(){
        document.getElementById("input").innerHTML = "";
    }
    function render(component){
        document.getElementById("input").innerHTML = component;
    }


    /*About JavaScript*/

    let metodosArray = [
        "Array.push() : inclui um item no fim da lista",
        "Array.pop() : remove um item no fim da lista",
        "Array.shift() : remove um item no inicio da lista",
        "Array.unshift() : adiciona um item no inicio da lista",
        "Array.length() : mede o tamanho da array",
        "Array.indexOf() : localiza a posição de um item na lista",
        "Array.Concat() : Concatena uma array com outra",
        "Array.isArray() : Verifica se é um array ou não",
        "Array.reverse() : Inverte a ordem da Array",
        "Array.slice() : Seleciona itens especificos e retorna nova array",
        "Array.toString() : Transforma uma array em String",
        "Array.sort() : Seleciona um elemento aleatorio dentro da Array",
        "Array.splice() : Adiciona e Remove elementos de uma Array",
        "Array.every() : Função que testa cada elemento",
        "Array.filter() : cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida",
        "Array.forEach() : executa uma dada função em cada elemento de um array",
        "Array.lastIndexOf() : retorna o ultimo índice que um certo elemento pode ser encontrado",
        "Array.map() : invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado",
        "Array.some() : testa se ao menos um dos elementos no array passa no teste",
        "Array.join() : junta todos os elementos de um array em uma string e retorna esta string.",
        "Array.reduce() : executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.",
        "Array.reduceRight() :  aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único"
    ];

    let ajusteDeTamanhoDeTexto = `
        <div class="control_inputs">
        <label for="textInput">Insira o limite de palavras</label>
        <input id="textInput" type="text" name="textInput">
        <input id="buttonInput" type="button" value="Alterar">
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum fugiat in rem a nesciunt expedita nostrum quas ducimus dolor ipsa eius alias autem animi, qui culpa hic vel! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum fugiat in rem a nesciunt expedita nostrum quas ducimus dolor ipsa eius alias autem animi, qui culpa hic vel! Dolore.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum fugiat in rem a nesciunt expedita nostrum quas ducimus dolor ipsa eius alias autem animi, qui culpa hic vel! Dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum fugiat in rem a nesciunt expedita nostrum quas ducimus dolor ipsa eius alias autem animi, qui culpa hic vel! Dolore.</p>
        </div>`;

    let calculactor =`
        <div id="calculadora">
        <input type="text" name="" id="" class="display_calculactor" value="0">
        <button class="button_calculactor">AC</button><button class="button_calculactor" >C</button><button class="button_calculactor">%</button><button class="button_calculactor" >/</button>
        <button class="button_calculactor">7</button><button class="button_calculactor">8</button><button class="button_calculactor">9</button><button class="button_calculactor" >x</button>
        <button class="button_calculactor">4</button><button class="button_calculactor">5</button><button class="button_calculactor">6</button><button class="button_calculactor" >-</button>
        <button class="button_calculactor">1</button><button class="button_calculactor">2</button><button class="button_calculactor">3</button><button class="button_calculactor" class="sum_button">+</button>
        <button class="button_calculactor">0</button><button class="button_calculactor">.</button><button class="button_calculactor">=</button>
        </div>
    `

    let aboutString = [
        "String.Length() : Contem o comprimento da String",
        "String.replace() :  retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere",
        "String.indexOf() : retorna o índice da primeira ocorrência do valor fornecido",
        "String.lastIndexOf() : retorna o índice da ultima ocorrência do valor fornecido",
        "String.slice() : extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.",
        "String.substring() : retorna a parte da string entre os índices inicial e final, ou até o final da string",
        "String.split() : divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array",
        "String.toLowerCase() : retorna o valor da string que foi chamada convertido para minúsculo.",
        "String.toUpperCase() : retorna o valor da string que foi chamada convertido para maiúsculo.",
        "String.valueOf() : retorna o valor primitivo de um objeto String."
    ];

    let aboutMath =[
    " : ",
    " : ",
    " : ",
    ]

    document.getElementById("array_button").addEventListener("click", () => {
        clear();
        render_table(metodosArray, "Metodos <strong>Array</strong>");
    })
    document.getElementById("string_button").addEventListener("click", () => {
        clear();
        render_table(aboutString, "Metodos <strong>Strings</strong>");
    })
    document.getElementById("math_button").addEventListener("click", () => {
        clear();
        render_table(aboutMath, "Metodos <strong>Math</strong>");
    })
    document.getElementById("length_text").addEventListener("click", () => {
        clear();
        render(ajusteDeTamanhoDeTexto);        
        script_adjust_text();
    })
    document.getElementById("calculactor").addEventListener("click", () => {
        clear();
        render(calculactor);
    })

    /*about React*/
    let react = [
        "Criar novo projeto : No terminal, npx create-react-app nome-proj",
        "Acessar pasta do projeto : cd my-first-app",
        "Abrir no vs-code : code .",
        "no terminal do vs : npm star (inicia o servidor de desenvolvimento"
        ];

    document.getElementById("react_button").addEventListener("click", () => {
        clear();
        render_table(react, "React");
    })
  });

  
    function script_adjust_text(){/*Função para ajuste dos textos*/
    let paragrafos = document.querySelectorAll("p");
    let buttonInput = document.getElementById("buttonInput");
    let qtdWords = document.getElementById("textInput");
    let historicParagrafs = [];
    
    buttonInput.addEventListener("click", () =>{
        adjustText(paragrafos);
    });

    function adjustText(paragraf){
        if(!isNaN(qtdWords.value)){
            var arr;
            
            for(let i = 0; i<paragraf.length; i++){

                if(historicParagrafs[i] == undefined){
                    historicParagrafs[i]=paragraf[i].textContent;                        
                    arr = historicParagrafs[i].split(" ");
                    paragraf[i].textContent = arr.slice(0,qtdWords.value).join(" ")+"...";
                }else{
                    console.log(historicParagrafs[i])
                    arr = historicParagrafs[i].split(" ");
                    paragraf[i].textContent = arr.slice(0,qtdWords.value).join(" ")+"...";
                }
            }
        }
    }
    };
    

    function scriptCalculactor(){
        let display = document.querySelector(".display_calculactor")
        let valor1 = 0
        let inival = 0
        let typedef = 0

        let buttons = document.querySelectorAll(".button_calculactor");

        
        

        function limp(){
            display.value = 0
       }
        function but(val){
            if (Number(display.value) === inival) {
                display.value = ""
            }
            display.value = display.value + val
       }
       function calc(key){
            valor1 = display.value
            display.value = 0
            typedef = key
       }
       function equal(){
           if (typedef == 1) {
            console.log(typedef)
            display.value = Number(valor1) * Number(display.value)
           }
           if (typedef == 2) {
            console.log(typedef)
            display.value = Number(valor1) - Number(display.value)
           }
           if (typedef == 3) {
            console.log(typedef)
            display.value = Number(valor1) + Number(display.value)
           }
           if (typedef == 4) {
            console.log(typedef)
            display.value = Number(valor1) / Number(display.value)
           }
            valor1 = 0
            typedef = 0
            inival = Number(display.value)
       }
    };

    




