// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ .

let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ") //.split recebe como argumento (dentro dele) o que ele quer separar nessa frase
console.log(myArray)

let phraseWithUnderscore = myArray.join("_") //.join ele vai juntar, no argumento você passa qual é o tipo de separador que quer.
console.log(phraseWithUnderscore)