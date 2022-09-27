// Operador Condicional (Ternário)

//Dependendo da condição, nós recebemos valores diferentes

// Condição entre valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos
// Café da manhã top
let pao = true
let queijo = false

//const niceBreakfast = pao && queijo ? "café top" : "café ruim"
const niceBreakfast = pao || queijo ? "café top" : "café ruim"

console.log(niceBreakfast)

//Maior de 18

let age = 19
const canDrive = age >= 18 ? "can drive" : "not drive"
console.log(canDrive)