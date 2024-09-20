function executar1038(){
    //ler o código
    let codigo = Number(prompt("Digite o código: "))
    //ler a quantidade
    let quantidade = Number(prompt("Quantidade: "))
    //definir o preço do produto
    let preço
    if(codigo == 1){
        preço = 4
    }else if (codigo == 2){
        preço = 4.5
    }else if (codigo == 3){
        preço = 5
    }else if (codigo == 4){
        preço = 2
    }else if (codigo == 5){
        preço = 1.50
    }else{
        alert('Digita o código direito ai ô! ')
    }

    //calcular o valor da conta (preço * quantidade)
    let valor = preço * quantidade
    alert("Sua conta deu " + valor)

    
}
