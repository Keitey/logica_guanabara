/* 
creuza precisa de um empréstimo, pelo valor emprestado ela vai precisar pagar
20% de juros, mas vai poder parcelar a dívida, o desafio é:
informar o valor que deseja pegar emprestado e em cima desse valor calcular o
total que a pessoa pagará considerando os 20% em cima do valor solicitado,
depois informar em quantas parcelas quero dividir e calcular o valor das parcelas
*/


function calcular(){
    let valor_emprestimo = document.getElementById('txt1')
    let parcelas = document.getElementById('txt2')
    let res = document.getElementById('res')
    let percentual = 0.2
    
    if(valor_emprestimo.value.length == '' || parcelas.value.length == ''){
        alert('Você precisa informar o valor do empréstimo e em quantas vezes deseja dividir')
    }

    let calculo_emprestimo = valor_emprestimo.value * percentual
    let novo_valor = Number(valor_emprestimo.value) + Number(calculo_emprestimo)
    let valor_parcelas = novo_valor/parcelas.value
  
    res.innerHTML += `O total a ser pago com juros é de: R$${novo_valor}<br/>`
    res.innerHTML += `E sua parcela será de: R$${valor_parcelas}`
    
}


