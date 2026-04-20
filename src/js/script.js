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