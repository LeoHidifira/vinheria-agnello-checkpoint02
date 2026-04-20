const validarNumero = (valor) =>{

    while (isNaN(valor)  || valor === "" 
 || valor === null){
        alert("O número digitado é invalido!");
        valor = parseFloat(prompt("Digite novamente: "))
    }

    return valor
};


const estoqueBaixo = (quantidade) =>{

    if (quantidade < 5){
        return true;
    } else{
        return false;
    }
};


const classificarVinho = (safra) =>{

    if(safra >= 2020){
        return "Jovem";
    } else if(safra >= 2010){
        return "Amadurecido";
    } else{
        return "Antigo";
    }
};

const exibirDados = (nome, safra, quantidade) =>{

    let classificacao = classificarVinho(safra);

    let mensagem = `
    Vinho: ${nome}
    Safra: ${safra}
    Classificação: ${classificacao}
    Quantidade: ${quantidade};
    `

    if (estoqueBaixo(quantidade) == true){
        mensagem += "\n \n ESTOQUE BAIXO"
    }

    console.log(mensagem);
    alert("Os dados do vinho foram exibidos no console!");
}

let contador = 0;
let totalEstoquebaixo = 0;
let vinhoAntigo = "";
let safraAntiga = 9999;
let continuar = true;

let vinho1, vinho2, vinho3, vinho4, vinho5;
let safra1, safra2, safra3, safra4, safra5;
let qtd1, qtd2, qtd3, qtd4, qtd5;

while(continuar){

    if (contador === 5) {
        alert("O limite de cadastros foi atingido (5)...");
        break;
    }

    contador++;

    let nome = prompt("Digite o nome do vinho: ");
    let safra = validarNumero(prompt("Digite a safra do vinho: "));
    let quantidade = validarNumero(prompt("Digite a quantidade: "));

    if (contador === 1){
        vinho1 = nome;
        safra1 = safra;
        qtd1 = quantidade;
    } else if (contador === 2){
        vinho2 = nome;
        safra2 = safra;
        qtd2 = quantidade;
    } else if (contador === 3){
        vinho3 = nome;
        safra3 = safra;
        qtd3 = quantidade;
    } else if (contador === 4){
        vinho4 = nome;
        safra4 = safra;
        qtd4 = quantidade;
    } else if (contador === 5){
        vinho5 = nome;
        safra5 = safra;
        qtd5 = quantidade;
    }

    exibirDados(nome, safra, quantidade);

    if (estoqueBaixo(quantidade) == true){
        totalEstoquebaixo++;
    }

    if (safra < safraAntiga){
        safraAntiga = safra;
        vinhoAntigo = nome;
    }

    let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");

    if(resposta.toLowerCase() === "n"){
        continuar = false;
    }

}


let resultadoFinal = `
Total de vinhos cadastrados: ${contador}
Total de vinhos com estoque baixo: ${totalEstoquebaixo}
Vinho mais antigo: 

Nome: ${vinhoAntigo} | Safra: ${safraAntiga} 
`;

console.log(resultadoFinal);
alert(resultadoFinal);