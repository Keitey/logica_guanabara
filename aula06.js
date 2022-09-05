//estrutura de repetição, contar de 0 a 10
let i = 0;
for (let i = 0; i < 10; i++) {
  console.log("contando");
}

//contar de 10 a 0
for (let c = 10; c > 0; c--) {
  console.log("regredindo");
}
//fatorial
let fat = 7;
let res = fat;
for (i = 1; i < fat; i++) {
  res *= i;
}
console.log(res);

//verificar se um número é primo
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
};
console.log(isPrime(6))

