function Executar1009 () {
    //Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas 
    // por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas 
    //vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
    let nomeVendedor
    let salarioFixo
    let vendasTotal
    let comissao
    let salarioFinal
    
    nomeVendedor = prompt ("Digite o nome do Vendedor:");
    salarioFixo = Number(prompt("Digite o salario do Vendedor:"));
    vendasTotal = Number(prompt("Digite o total em dinheiro de vendas efetuadas no mes:"))
    
    comissao = vendasTotal * 0.15
    salarioFinal = comissao + salarioFixo
    
    alert ("Usuario:" +nomeVendedor + "\n Salario final e :" +salarioFinal.toFixed(2))
}