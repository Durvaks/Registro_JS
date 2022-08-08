window.addEventListener('load', () => {
    
    function render(text, title){
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

    let tituloArray = "Metodos <strong>Array</strong>";
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

    let titleAboutString = "Metodos <strong>Strings</strong>";
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

    let titleMath = "Metodos <strong>Math</strong>";
    let aboutMath =[
    " : ",
    " : ",
    " : ",
    ]


    let tituloReact = "React";
    let react = [
    "Criar novo projeto : No terminal, npx create-react-app nome-proj",
    "Acessar pasta do projeto : cd my-first-app",
    "Abrir no vs-code : code .",
    "no terminal do vs : npm star (inicia o servidor de desenvolvimento"
    ];

    /*About JavaScript*/
    document.getElementById("js_button").addEventListener("click", () => {
        clear();
        render(metodosArray, tituloArray);
        render(aboutString, titleAboutString);
        render(aboutMath, titleMath);
    })
    /*about React*/
    document.getElementById("react_button").addEventListener("click", () => {
        clear();
        render(react, tituloReact);
    })
  });
