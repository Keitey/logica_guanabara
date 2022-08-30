/*
A Creuza vai fazer aniversário e não sabe quantas velas colocar no bolo
*/

function getAge(){
    let now = new Date();
    let year = now.getFullYear();
    
    return year - 1988
}
console.log(getAge())