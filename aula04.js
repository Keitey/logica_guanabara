// criar condição para viagem a Disney

function viagem(){
    let grana = 8000

    if(grana > 7000){
        console.log('Podemos viajar o/')
    }
    else{
        console.log('Você vai precisar economizar mais!')
    }
}
viagem()
//verificar se um número é par ou impar
function verificar(n){
    if(n%2==0){
       return 'par'
    }
    else{
        return 'impar'
    }
}
console.log(verificar(10))
//calcular IMC
function calcularIMC(){
    let peso = 40
    let altura = 1.80
    let imc = peso / (altura * altura)

    if(imc < 18){
        return `abaixo do peso`
    }
    else if(imc > 18 && imc < 25){
        return `peso normal`
    }
    else if(imc > 25 && imc > 29){
        return `acima do peso`
    }
    else{
        if(imc > 30){
            return `obesidade`
        }
    }
}
console.log(calcularIMC())
//algoritmo para saber se a pessoa está apta a dirigir,ou seja, se tem 18 anos
function dirigir(idade){
    if(idade < 18){
        return `Você ainda não tem idade para dirigir!`
    }
    else{
        return `Você pode dirigir!`
    }
}
console.log(dirigir(18))
//aluno aprovado ou reprovado
function aprovadoOuReprovado(nota){
    if(nota < 7){
        return `reprovado`
    }
    else{
        return `aprovado`
    }
}
console.log(aprovadoOuReprovado(7))