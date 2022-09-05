//aluno aprovado, reprovado ou em recuperação
function avaliarAluno(a, b){
    let media = (a + b) / 2;
    if(media >= 7){
        console.log('aprovado')
    }
    else if(media >= 5 && media < 7){
        console.log('recuperação')
    }
    else{
        console.log('reprovado')
    }
}
avaliarAluno(3,7)