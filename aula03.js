//escrever uma função para saber quem é maior e quem é menor
function maiorOuMenor(a){

    if(a < 5){
        console.log('número menor')
    }
    else{
        console.log('número maior')
    }
}

maiorOuMenor(8)
//a é igual a b 
//depois testar se a é diferente de b
function igualdade(){
    let a = 3
    let b = 5

    if(a !== b){
        return true
    }
    else{
        return false
    }
}
console.log(igualdade())
//verificar se é escaleno ou equilátero
//escaleno todos os lados do triângulo são iguais e equilátero ou lados são diferentes
function triangulo(a=0,b=0,c=0){
    if(a == b && b== c){
        console.log('escaleno')
    }
    else{
        console.log('equilátero')
    }
}
triangulo(2,2,2)